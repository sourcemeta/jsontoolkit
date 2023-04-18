#include <jsontoolkit/contrib/resolver.h>
#include <jsontoolkit/json.h>

#include <cassert>   // assert
#include <iostream>  // std::cout, std::cerr
#include <sstream>   // std::stringstream
#include <stdexcept> // std::runtime_error

static size_t on_data(const void *contents, const size_t length,
                      const size_t size, void *user_data) {
  std::stringstream *buffer = static_cast<std::stringstream *>(user_data);
  (*buffer) << std::string{static_cast<const char *>(contents), length * size};
  // This callback should return the number of bytes actually taken care of
  return length * size;
}

static auto set_option(CURL *handle, const CURLoption option, const long value)
    -> void {
  const CURLcode result = curl_easy_setopt(handle, option, value);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }
}

sourcemeta::jsontoolkit::contrib::Resolver::Resolver() {
  this->handle = curl_easy_init();
  assert(this->handle);
  CURLcode result = CURLE_OK;

  // This callback function gets called by libcurl as soon as there is data
  // received that needs to be saved
  result = curl_easy_setopt(this->handle, CURLOPT_WRITEFUNCTION, on_data);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }

  // The receive buffer size
  set_option(this->handle, CURLOPT_BUFFERSIZE, 102400L);
  // Fail on status codes >= 400
  set_option(this->handle, CURLOPT_FAILONERROR, 1L);
  // Follow redirects
  set_option(this->handle, CURLOPT_FOLLOWLOCATION, 1L);
  // The maximum amount of redirects to follow
  set_option(this->handle, CURLOPT_MAXREDIRS, 50L);
  // Do not report progress information
  set_option(this->handle, CURLOPT_NOPROGRESS, 1L);
  // Support both IPv4 and IPv6
  set_option(this->handle, CURLOPT_IPRESOLVE, (long)CURL_IPRESOLVE_WHATEVER);
  // TCP keepalive probes will be sent
  set_option(this->handle, CURLOPT_TCP_KEEPALIVE, 1L);
  // The version of HTTP to use
  set_option(this->handle, CURLOPT_HTTP_VERSION, (long)CURL_HTTP_VERSION_1_1);

  // An identifiable user agent
  std::ostringstream user_agent;
  user_agent << "jsontoolkit/" << JSONTOOLKIT_VERSION;
  curl_easy_setopt(this->handle, CURLOPT_USERAGENT, user_agent.str().c_str());

  // Expect JSON Schema or JSON data
  this->headers = curl_slist_append(
      this->headers, "Accept: application/schema+json, "
                     "application/schema-instance+json, application/json");
  result = curl_easy_setopt(this->handle, CURLOPT_HTTPHEADER, this->headers);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }
}

// We need to be careful with copying, as we are handling
// various plain C constructs from cURL
sourcemeta::jsontoolkit::contrib::Resolver::Resolver(
    const sourcemeta::jsontoolkit::contrib::Resolver &copy) {
  this->handle = curl_easy_duphandle(copy.handle);
  this->headers = nullptr;
  struct curl_slist *current = copy.headers;
  while (current) {
    this->headers = curl_slist_append(this->headers, current->data);
    current = current->next;
  }

  CURLcode result =
      curl_easy_setopt(this->handle, CURLOPT_HTTPHEADER, this->headers);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }
}

sourcemeta::jsontoolkit::contrib::Resolver::~Resolver() {
  curl_slist_free_all(this->headers);
  curl_easy_cleanup(this->handle);
}

auto sourcemeta::jsontoolkit::contrib::Resolver::operator()(
    const std::string &identifier)
    -> std::future<std::optional<sourcemeta::jsontoolkit::JSON>> {
  std::cerr << "---- Resolving: " << identifier << "\n";
  CURLcode result;
  result = curl_easy_setopt(this->handle, CURLOPT_URL, identifier.c_str());
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }

  std::stringstream buffer;
  // The user pointer passed in to the callback in the userdata argument
  result = curl_easy_setopt(handle, CURLOPT_WRITEDATA, &buffer);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }

  result = curl_easy_perform(handle);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }

  long http_code;
  result = curl_easy_getinfo(handle, CURLINFO_RESPONSE_CODE, &http_code);
  if (result != CURLE_OK) {
    throw std::runtime_error(curl_easy_strerror(result));
  }

  std::cerr << "     Code: " << http_code << "\n";
  std::promise<std::optional<sourcemeta::jsontoolkit::JSON>> promise;
  promise.set_value(sourcemeta::jsontoolkit::parse(buffer));
  return promise.get_future();
}
