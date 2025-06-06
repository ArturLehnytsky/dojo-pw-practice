import { expect, test } from '@playwright/test';

//Функції для клонування масивів
function cloneArrayBySlice(arrayToClone: Array<any>) {
  return arrayToClone.slice();
}

function cloneArrayByConcat(arrayToClone: Array<any>) {
  return arrayToClone.concat();
}

function cloneArrayByForCycle(arrayToClone: Array<any>) {
  let clonedArray = new Array<any>(arrayToClone.length);
  for (let i = 0; i < arrayToClone.length; i++) {
    clonedArray[i] = arrayToClone[i];
  }
  return clonedArray;
}

//Функція для порівняння масивів
function compareArrays(arr1: Array<any>, arr2: Array<any>) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

test('Concat method - 1D array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [21, undefined, 33];
  const clonedArray = cloneArrayByConcat(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Slice method - 1D array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [21, undefined, 33];
  const clonedArray = cloneArrayByConcat(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Slice method - 2D array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [1, 2, [4, 0]];
  const clonedArray = cloneArrayBySlice(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Concat method - 2D array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [1, 2, [4, 0]];
  const clonedArray = cloneArrayByConcat(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Concat method - Matrix array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const clonedArray = cloneArrayByConcat(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Slice method - Matrix array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const clonedArray = cloneArrayBySlice(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Cycle method - Matrix array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const clonedArray = cloneArrayByForCycle(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Cycle method - 1D array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [21, undefined, 33];
  const clonedArray = cloneArrayByForCycle(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});

test('Cycle method - 2D array', { tag: ['@unit', '@clone', '@array'] }, async () => {
  const testData = [1, 2, [4, 0]];
  const clonedArray = cloneArrayByForCycle(testData);
  const isCopy = compareArrays(testData, clonedArray);
  expect(isCopy).toBe(true);
});
