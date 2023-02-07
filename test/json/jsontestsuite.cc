#include <jsontoolkit/json.h>

#include <filesystem> // std::filesystem::path, std::filesystem::directory_entry
#include <fstream>    // std::ifstream
#include <gtest/gtest.h>
#include <stdexcept> // std::domain_error
#include <string>    // std::string

enum class JSONTestType { Accept, Reject };

class JSONTest : public testing::Test {
public:
  explicit JSONTest(const std::filesystem::path path,
                    const JSONTestType category)
      : test_path{path}, type{category} {}

  void TestBody() override {
    std::ifstream stream{this->test_path};
    stream.exceptions(std::ios_base::badbit);
    if (this->type == JSONTestType::Accept) {
      sourcemeta::jsontoolkit::parse(stream);
      SUCCEED();
    } else if (this->type == JSONTestType::Reject) {
      EXPECT_THROW(sourcemeta::jsontoolkit::parse(stream), std::domain_error);
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
    const std::filesystem::path test_path{entry.path()};

    // Ignore "maybe" for now
    const char front = test_path.filename().string().front();
    if (front == 'i') {
      continue;
    }

#if defined(JSONTOOLKIT_BACKEND_RAPIDJSON)
    // TODO: Make this pass
    if (test_path.filename() == "n_multidigit_number_then_00.json") {
      continue;
    }

#if defined(__GNUC__)
    // TODO: Make this pass
    if (test_path.filename() == "n_structure_100000_opening_arrays.json") {
      continue;
    }

    // TODO: Make this pass
    if (test_path.filename() == "n_structure_open_array_object.json") {
      continue;
    }
#endif
#endif

    JSONTestType type =
        front == 'n' ? JSONTestType::Reject : JSONTestType::Accept;

    testing::RegisterTest(
        "JSONTestSuite", test_path.filename().string().c_str(), nullptr,
        nullptr, __FILE__, __LINE__,
        [=]() -> JSONTest * { return new JSONTest(test_path, type); });
  }

  return RUN_ALL_TESTS();
}
