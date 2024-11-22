#include <sourcemeta/jsontoolkit/regex.h>

namespace sourcemeta::jsontoolkit {

auto to_regex(const JSON::String &pattern) noexcept -> std::optional<Regex> {
  if (pattern == ".*" || pattern == "^.*$" || pattern == "^(.*)$") {
    return RegexTypeNoop{};
  }

  try {
    static const std::regex PREFIX_REGEX{R"(^\^([a-zA-Z0-9-_/]+)$)"};
    std::smatch matches;
    if (std::regex_match(pattern, matches, PREFIX_REGEX)) {
      return RegexTypePrefix{matches[1].str()};
    }

    return std::regex{pattern, std::regex::ECMAScript | std::regex::nosubs};
  } catch (...) {
    return std::nullopt;
  }
}

auto matches(const Regex &regex, const JSON::String &value) -> bool {
  switch (static_cast<RegexIndex>(regex.index())) {
    case RegexIndex::Engine:
      return std::regex_search(value, std::get<RegexTypeEngine>(regex));
    case RegexIndex::Prefix:
      return value.starts_with(std::get<RegexTypePrefix>(regex));
    case RegexIndex::Noop:
      return true;
  }

    // See https://en.cppreference.com/w/cpp/utility/unreachable
#if defined(_MSC_VER) && !defined(__clang__)
  __assume(false);
#else
  __builtin_unreachable();
#endif
}

} // namespace sourcemeta::jsontoolkit
