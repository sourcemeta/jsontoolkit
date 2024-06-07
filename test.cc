#include <future>
#include <optional>
#include <string>

#include <iostream>

int main() {
  std::cerr << "++++ dialect has no value\n";
  std::promise<std::optional<std::string>> promise;
  std::cerr << "++++ setting promise value\n";
  promise.set_value(std::nullopt);
  std::cerr << "XXXX Got id\n";
  return 0;
}
