import { expect, test } from '@playwright/test';

function addSplitBetweenEven(str: string) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    const isPairOfNumbersEven = Number(str[i]) % 2 === 0 && Number(str[i + 1]) % 2 === 0;

    if (isPairOfNumbersEven) {
      newString += str[i] + '-';
    } else {
      newString += str[i];
    }
  }
  return newString;
}

test('split even numbers - only numbers', { tag: ['@unit', '@split'] }, async () => {
  const testData = '025468';
  const expectedResult = '0-254-6-8';
  const actualResult = addSplitBetweenEven(testData);
  expect(actualResult === expectedResult).toBe(true);
});

test('split even numbers - with NaN chars', { tag: ['@unit', '@split'] }, async () => {
  const testData = '02a54$68';
  const expectedResult = '0-2a54$6-8';
  const actualResult = addSplitBetweenEven(testData);
  expect(actualResult === expectedResult).toBe(true);
});
