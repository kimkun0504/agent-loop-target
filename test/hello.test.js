import { test } from 'node:test';
import assert from 'node:assert';
import { hello } from '../src/index.js';

test('hello returns hello', () => {
  assert.strictEqual(hello(), 'hello');
});

test('hello with a string name', () => {
  assert.strictEqual(hello('world'), 'hello, world');
});

test('hello with non-string values throws TypeError', () => {
  assert.throws(() => hello(42), TypeError);
  assert.throws(() => hello(null), TypeError);
  assert.throws(() => hello({}), TypeError);
});
