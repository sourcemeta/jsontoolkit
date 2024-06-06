#include <future>
#include <optional>
#include <string>

#include <iostream>

auto base_dialect() -> std::future<std::optional<std::string>> {
  std::cerr << "++++ dialect has no value\n";
  std::promise<std::optional<std::string>> promise;
  std::cerr << "++++ setting promise value\n";
  promise.set_value(std::nullopt);
  std::cerr << "++++ returning\n";
  return promise.get_future();
}

int main() {
  std::cerr << "XXXX JSONSchema_id_draft4.id_boolean_default_dialect\n";
  std::cerr << "XXXX Getting id\n";
  base_dialect().wait();
  std::cerr << "XXXX Got id\n";
  return 0;
}
