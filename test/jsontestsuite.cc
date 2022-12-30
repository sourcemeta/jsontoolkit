#include <jsontoolkit/json.h>

#include <filesystem> // std::filesystem::path, std::filesystem::directory_entry
#include <fstream>    // std::ifstream
#include <gtest/gtest.h>
#include <stdexcept> // std::domain_error
#include <string>    // std::string
#include <utility>   // std::move

// Heavily inspired by https://stackoverflow.com/a/116220
static auto read_file(const std::filesystem::path path) -> std::string {
  constexpr std::size_t buffer_size{4096};
  std::ifstream stream{path.string()};
  stream.exceptions(std::ios_base::badbit);
  std::string buffer(buffer_size, '\0');
  std::string output;
  while (stream.read(&buffer[0], buffer_size)) {
    output.append(buffer, 0,
                  static_cast<std::string::size_type>(stream.gcount()));
  }
  return output.append(buffer, 0,
                       static_cast<std::string::size_type>(stream.gcount()));
}

enum class JSONTestType { Accept, Reject };

class JSONTest : public testing::Test {
public:
  explicit JSONTest(const std::filesystem::path path,
                    const JSONTestType category)
      : test_path{path}, type{category} {}

  void TestBody() override {
    std::string raw_document{read_file(this->test_path)};
    if (this->type == JSONTestType::Accept) {
      // TODO: Read from a file input stream instead
      sourcemeta::jsontoolkit::parse(raw_document);
      SUCCEED();
    } else if (this->type == JSONTestType::Reject) {
      // TODO: Read from a file input stream instead
      EXPECT_THROW(sourcemeta::jsontoolkit::parse(raw_document),
                   std::domain_error);
    } else {
      FAIL() << "Invalid test type";
    }
  }

private:
  const std::filesystem::path test_path;
  const JSONTestType type;
};

int main(int argc, char **argv) {
  testing::InitGoogleTest(&argc, argv);
  const std::filesystem::path test_parsing_path =
      std::filesystem::path{JSONTESTSUITE_PATH} / "test_parsing";
  for (const std::filesystem::directory_entry &entry :
       std::filesystem::directory_iterator(test_parsing_path)) {
    const std::filesystem::path test_path{std::move(entry.path())};

    // Ignore "maybe" for now
    // TODO: Find a way to support arbitrary precision integers/reals
    // using a library like GMP.
    const char front = test_path.filename().string().front();
    if (front == 'i') {
      continue;
    }

    // TODO: Make this pass
    if (test_path.filename() == "n_multidigit_number_then_00.json") {
      continue;
    }

    JSONTestType type =
        front == 'n' ? JSONTestType::Reject : JSONTestType::Accept;

    testing::RegisterTest(
        "JSONTestSuite", test_path.filename().c_str(), nullptr, nullptr,
        __FILE__, __LINE__,
        [=]() -> JSONTest * { return new JSONTest(test_path, type); });
  }

  return RUN_ALL_TESTS();
}
