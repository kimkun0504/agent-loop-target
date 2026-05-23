import { test } from 'node:test';
import assert from 'node:assert';
import { hello } from '../src/index.js';

test('hello returns hello', () => {
  assert.strictEqual(hello(), 'hello');
});

test('hello with a string name returns greeting', () => {
  assert.strictEqual(hello('world'), 'hello, world');
  assert.strictEqual(hello(''), 'hello, ');
});

test('hello with a non-string value throws TypeError', () => {
  assert.throws(() => hello(42), TypeError);
  assert.throws(() => hello(null), TypeError);
  assert.throws(() => hello({}), TypeError);
  assert.throws(() => hello(undefined), TypeError);
});
