#include <future>
#include <optional>
#include <string>
#include <iostream>

int main() {
  std::promise<std::optional<std::string>> promise;
  std::cerr << "Setting promise value\n";
  promise.set_value(std::nullopt);
  std::cerr << "Exitting\n";
  return 0;
}
