import { expect, test } from '@playwright/test';

/*
input:  256874134779
output: 216834574779
*/
function sortNumbers(num: number) {
  const str = String(num);
  let output = [];
  let oddNumbers = [];
  let oddCounter = 0;

  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0) {
      output.push(str[i]);
    } else {
      output.push(undefined);
      oddNumbers.push(parseInt(str[i]));
    }
  }

  oddNumbers.sort((a, b) => a - b);

  for (let i = 0; i < output.length; i++) {
    if (output[i] === undefined) {
      output[i] = oddNumbers[oddCounter];
      oddCounter++;
    }
  }

  return output.join('');
}

test('hard sort', { tag: ['@unit', '@split'] }, async () => {
  const testData = 256874134779;
  const expectedResult = '216834574779';
  const actualResult = sortNumbers(testData);
  expect(actualResult === expectedResult).toBe(true);
});
