#include <sourcemeta/jsontoolkit/regex.h>

namespace sourcemeta::jsontoolkit {

auto to_regex(const JSON::String &pattern) noexcept -> std::optional<Regex> {
  try {
    return std::regex{pattern, std::regex::ECMAScript | std::regex::nosubs};
  } catch (...) {
    return std::nullopt;
  }
}

auto matches(const Regex &regex, const JSON::String &value) -> bool {
  return std::regex_search(value, regex);
}

} // namespace sourcemeta::jsontoolkit
