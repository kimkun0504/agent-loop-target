import { test } from 'node:test';
import assert from 'node:assert';
import { hello } from '../src/index.js';

test('hello returns hello', () => {
  assert.strictEqual(hello(), 'hello');
});
