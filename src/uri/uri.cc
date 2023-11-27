#include <sourcemeta/jsontoolkit/uri.h>
#include <uriparser/Uri.h>

#include <cassert>   // assert
#include <cstdint>   // std::uint32_t
#include <sstream>   // std::ostringstream
#include <stdexcept> // std::length_error, std::runtime_error
#include <string>    // std::stoul, std::string
#include <utility>   // std::move

static auto uri_normalize(UriUriA *uri) -> void {
  if (uriNormalizeSyntaxA(uri) != URI_SUCCESS) {
    throw sourcemeta::jsontoolkit::URIError{"Could not normalize URI"};
  }
}

static auto uri_to_string(const UriUriA *const uri) -> std::string {
  int size;
  if (uriToStringCharsRequiredA(uri, &size) != URI_SUCCESS) {
    throw sourcemeta::jsontoolkit::URIError{"Could not determine URI size"};
  }

  std::string result;
  // Because of this, `uriToStringA` could never error out with
  // `URI_ERROR_OUTPUT_TOO_LARGE`.
  result.resize(static_cast<std::string::size_type>(size));
  if (uriToStringA(result.data(), uri, size + 1, nullptr) != URI_SUCCESS) {
    throw sourcemeta::jsontoolkit::URIError{"Could not stringify URI"};
  }

  return result;
}

static auto uri_text_range(const UriTextRangeA *const range)
    -> std::optional<std::string_view> {
  if (range->afterLast == nullptr) {
    return std::nullopt;
  }

  return std::string_view{range->first,
                          static_cast<std::string_view::size_type>(
                              range->afterLast - range->first)};
}

namespace sourcemeta::jsontoolkit {

struct URI::Internal {
  UriUriA uri;
};

URI::URI(std::string input) : data{std::move(input)}, internal{new Internal} {
  const char *error_position;
  const auto code{uriParseSingleUriA(&this->internal->uri, this->data.c_str(),
                                     &error_position)};
  switch (code) {
    case URI_ERROR_SYNTAX:
      // TODO: Test the positions of this error
      throw URIParseError{
          static_cast<std::uint64_t>(error_position - this->data.c_str() + 1)};
    case URI_ERROR_MALLOC:
      throw std::runtime_error("URI malloc error");
    case URI_ERROR_OUTPUT_TOO_LARGE:
      throw std::length_error("URI output too large");
    case URI_SUCCESS:
      break;
    default:
      throw URIError{"Unknown URI error"};
  }

  uri_normalize(&this->internal->uri);
}

URI::~URI() { uriFreeUriMembersA(&this->internal->uri); }

URI::URI(const URI &other) : URI{other.recompose()} {}

URI::URI(URI &&other)
    : data{std::move(other.data)}, internal{std::move(other.internal)} {
  other.internal = nullptr;
}

auto URI::is_absolute() const noexcept -> bool {
  // An absolute URI always contains a scheme component,
  return this->internal->uri.scheme.first != nullptr;
}

auto URI::scheme() const -> std::optional<std::string_view> {
  return uri_text_range(&this->internal->uri.scheme);
}

auto URI::host() const -> std::optional<std::string_view> {
  return uri_text_range(&this->internal->uri.hostText);
}

auto URI::port() const -> std::optional<std::uint32_t> {
  const auto port_text{uri_text_range(&this->internal->uri.portText)};
  if (!port_text.has_value()) {
    return std::nullopt;
  }

  return std::stoul(std::string{port_text.value()});
}

auto URI::fragment() const -> std::optional<std::string_view> {
  return uri_text_range(&this->internal->uri.fragment);
}

auto URI::recompose() const -> std::string {
  return uri_to_string(&this->internal->uri);
}

auto URI::resolve_from(const URI &base) const -> std::string {
  UriUriA absoluteDest;
  // Looks like this function allocates to the output variable
  // even on failure.
  // See https://uriparser.github.io/doc/api/latest/
  switch (uriAddBaseUriExA(&absoluteDest, &this->internal->uri,
                           &base.internal->uri, URI_RESOLVE_STRICTLY)) {
    case URI_SUCCESS:
      break;
    case URI_ERROR_ADDBASE_REL_BASE:
      uriFreeUriMembersA(&absoluteDest);
      assert(!base.is_absolute());
      throw URIError{"Base URI is not absolute"};
    default:
      uriFreeUriMembersA(&absoluteDest);
      throw URIError{"Could not resolve URI"};
  }

  try {
    uri_normalize(&absoluteDest);
    const auto result{uri_to_string(&absoluteDest)};
    uriFreeUriMembersA(&absoluteDest);
    return result;
  } catch (...) {
    uriFreeUriMembersA(&absoluteDest);
    throw;
  }
}

auto URI::from_fragment(std::string_view fragment) -> URI {
  assert(fragment.front() != '#');
  std::ostringstream uri;
  uri << "#" << fragment;
  return {uri.str()};
}

} // namespace sourcemeta::jsontoolkit
