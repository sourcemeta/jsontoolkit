#include <future>
#include <iostream>

int main() {
  std::promise<int> promise;
  std::cerr << "XXX Setting promise value\n";
  promise.set_value(5);
  std::cerr << "XXX Exitting\n";
  return 0;
}
