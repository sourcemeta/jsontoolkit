#include <future>
#include <optional>
#include <string>
#include <iostream>

int main() {
  std::promise<int> promise;
  std::cerr << "Setting promise value\n";
  promise.set_value(5);
  std::cerr << "Exitting\n";
  return 0;
}
