#include <gtest/gtest.h>

#include <sourcemeta/jsontoolkit/json.h>
#include <sourcemeta/jsontoolkit/jsonschema.h>

#include "jsonschema_test_utils.h"

// TODO: Test all other JSON Schema dialects

TEST(JSONSchema_explain_object, draft7_type) {
  const sourcemeta::jsontoolkit::JSON schema{
      sourcemeta::jsontoolkit::parse(R"JSON({
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object"
  })JSON")};

  EXPLAIN(schema, SchemaExplanationComposite);

  EXPECT_EQ(explanation.type, "Object");
  EXPECT_TRUE(explanation.constraints.empty());
  EXPECT_FALSE(explanation.title.has_value());
  EXPECT_FALSE(explanation.description.has_value());
  EXPECT_TRUE(explanation.components.empty());
}
