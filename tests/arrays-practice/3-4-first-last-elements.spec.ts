import { expect, test } from '@playwright/test';

function getFirstElements(arr: Array<any>, count: number = 1) {
  return arr.slice(0, count);
}

function getLastElements(arr: Array<any>, count: number = 1) {
  if (count === 0 || count === undefined) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-1 * count);
  }
}

test('Should return first 3 elements', async () => {
  const testData = [7, 9, 0, -2];
  const result = getFirstElements(testData, 3);
  expect(JSON.stringify(result) === JSON.stringify([7, 9, 0])).toBe(true);
});

test('Should return first element', async () => {
  const testData = [7, 9, 0, -2];
  const result = getFirstElements(testData);
  expect(JSON.stringify(result) === JSON.stringify(7)).toBe(true);
});

test('Should return last element', async () => {
  const testData = [7, 9, 0, -2];
  const result = getLastElements(testData);
  expect(JSON.stringify(result) === JSON.stringify(-2)).toBe(true);
});

test('Should return 3 last elements', async () => {
  const testData = [7, 9, 0, -2];
  const result = getLastElements(testData, 3);
  expect(JSON.stringify(result) === JSON.stringify([9, 0, -2])).toBe(true);
});
