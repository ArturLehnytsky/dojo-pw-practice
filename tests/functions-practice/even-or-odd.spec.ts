import { test, expect } from '@playwright/test';

const odd = 'The number is odd';
const even = 'The number is even';

function evenOrOdd(num: number) {
  if (num % 2 !== 0) {
    return odd;
  } else {
    return even;
  }
}

test('positive even', { tag: '@unit' }, async () => {
  const result = evenOrOdd(2);
  expect(result).toEqual(even);
});

test('positive odd', { tag: '@unit' }, async () => {
  const result = evenOrOdd(3);
  expect(result).toEqual(odd);
});

test('negative even', { tag: '@unit' }, async () => {
  const result = evenOrOdd(-4);
  expect(result).toEqual(even);
});

test('negative odd', { tag: '@unit' }, async () => {
  const result = evenOrOdd(-5);
  expect(result).toEqual(odd);
});

test('zero is even', async () => {
  const result = evenOrOdd(0);
  expect(result).toEqual(even);
});
