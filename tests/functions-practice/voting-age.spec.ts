import { expect, test } from '@playwright/test';

function isUserCanVote(age: number) {
  return age >= 18 ? 'Ви можете голосувати' : 'Ви ще не можете голосувати';
}

test('Valid age to vote', { tag: '@unit' }, () => {
  expect(isUserCanVote(18)).toEqual('Ви можете голосувати');
});

test('Invalid Age to vote', { tag: '@unit' }, () => {
  expect(isUserCanVote(17)).toEqual('Ви ще не можете голосувати');
});
