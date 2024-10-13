import test from 'node:test';
import { strict as assert } from 'node:assert';
import { compile, evaluate, remove } from './jsontoolkit.js';

test('simple 2020-12 pass', async (t) => {
  const schema = await compile({
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    type: 'string'
  });

  const result = await evaluate(schema, "foo");
  assert.ok(result);
  remove(schema);
});

test('simple 2020-12 fail', async (t) => {
  const schema = await compile({
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    type: 'string'
  });

  const result = await evaluate(schema, 1);
  assert.ok(!result);
  remove(schema);
});
