import { test, expect } from '@playwright/test';

function detectNumberType(num: number) {
  if (num === 0) return 'Число дорівнює нулю.';

  return num > 0 ? 'Число додатнє.' : 'Число від’ємне.';
}

test('Positive', { tag: '@unit' }, () => {
  expect(detectNumberType(10)).toEqual('Число додатнє.');
});

test('Negative', { tag: '@unit' }, () => {
  expect(detectNumberType(-5)).toEqual('Число від’ємне.');
});

test('Zero', { tag: '@unit' }, () => {
  expect(detectNumberType(0)).toEqual('Число дорівнює нулю.');
});
