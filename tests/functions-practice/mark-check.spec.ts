import { expect, test } from '@playwright/test';

function markChecker(mark: number) {
  const passMark = 50;
  if (mark >= passMark) {
    return 'Іспит складено';
  } else if (mark < passMark) {
    return 'Іспит провалено';
  }
}

test('Minimum mark to pass', { tag: ['@unit', '@markCheck'] }, async () => {
  expect(markChecker(50)).toEqual('Іспит складено');
});

test('High mark', { tag: ['@unit', '@markCheck'] }, async () => {
  expect(markChecker(99)).toEqual('Іспит складено');
});

test('Low mark - exam failed', { tag: ['@unit', '@markCheck'] }, async () => {
  expect(markChecker(49)).toEqual('Іспит провалено');
});
