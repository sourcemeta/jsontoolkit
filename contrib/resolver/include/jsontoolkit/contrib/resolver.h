#ifndef JSONTOOLKIT_CONTRIB_RESOLVER_H_
#define JSONTOOLKIT_CONTRIB_RESOLVER_H_

#include <future>   // std::future
#include <optional> // std::optional
#include <string>   // std::string

#include <curl/curl.h>
#include <jsontoolkit/jsonschema.h>

namespace sourcemeta::jsontoolkit::contrib {

// TODO: Implement basic in-memory caching
class Resolver {
public:
  Resolver();
  ~Resolver();
  Resolver(const Resolver &copy);
  auto operator()(const std::string &identifier)
      -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>>;

private:
  CURL *handle;
  struct curl_slist *headers = nullptr;
};

} // namespace sourcemeta::jsontoolkit::contrib

#endif
