import { test, expect } from '@playwright/test';

function compareNum(a: number, b: number) {
  if (a === b) return `Числа рівні.`;

  return a > b ? `Перше число більше.` : `Друге число більше.`;
}

test('The first number is greater.', { tag: '@unit' }, () => {
  expect(compareNum(2, 1)).toEqual('Перше число більше.');
});

test('The second number is greater.', { tag: '@unit' }, () => {
  expect(compareNum(2, 3)).toEqual('Друге число більше.');
});

test('The numbers are equal.', { tag: '@unit' }, () => {
  expect(compareNum(1, 1)).toEqual('Числа рівні.');
});
