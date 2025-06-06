import { expect, test } from '@playwright/test';

function isArray(input: any) {
  return Array.isArray(input);
}

test('array input', { tag: ['@unit', '@arrays'] }, async () => {
  const result = isArray([1, 2, 4, 0]);
  expect(result).toBe(true);
});

test('string input', { tag: ['@unit', '@arrays'] }, async () => {
  const result = isArray('QA DOJO');
  expect(result).toBe(false);
});

test('number input', { tag: ['@unit', '@arrays'] }, async () => {
  const result = isArray(22);
  expect(result).toBe(false);
});

test('null input', { tag: ['@unit', '@arrays'] }, async () => {
  const result = isArray(null);
  expect(result).toBe(false);
});

test('undefined input', { tag: ['@unit', '@arrays'] }, async () => {
  const result = isArray(undefined);
  expect(result).toBe(false);
});

test('object input', { tag: ['@unit', '@arrays'] }, async () => {
  const result = isArray({});
  expect(result).toBe(false);
});
