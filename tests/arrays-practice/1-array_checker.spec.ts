import { expect, test } from '@playwright/test';

function isArray(input: any) {
  const isInputArray = Array.isArray(input);
  return isInputArray;
}

test('array input', { tag: '@unit' }, async () => {
  const result = isArray([]);
  expect(result).toBe(true);
});

test('string input', { tag: '@unit' }, async () => {
  const result = isArray('QA DOJO');
  expect(result).toBe(false);
});

test('number input', { tag: '@unit' }, async () => {
  const result = isArray(22);
  expect(result).toBe(false);
});

test('null input', { tag: '@unit' }, async () => {
  const result = isArray(null);
  expect(result).toBe(false);
});

test('undefined input', { tag: '@unit' }, async () => {
  const result = isArray(undefined);
  expect(result).toBe(false);
});

test('object input', { tag: '@unit' }, async () => {
  const result = isArray({});
  expect(result).toBe(false);
});
