import { expect, test } from '@playwright/test';

function greetByTime(hour: number) {
  if (hour >= 0 && hour < 12) {
    return 'Доброго ранку!';
  } else if (hour >= 12 && hour <= 18) {
    return 'Доброго дня!';
  } else if (hour > 18 && hour < 24) {
    return 'Доброго вечора!';
  } else {
    return 'невірна година!';
  }
}

test('midnight greeting', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(0)).toEqual('Доброго ранку!');
});

test('7 hour greeting', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(7)).toEqual('Доброго ранку!');
});

test('12 hour greeting', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(12)).toEqual('Доброго дня!');
});

test('15 hour greeting', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(15)).toEqual('Доброго дня!');
});

test('18 hour greeting', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(18)).toEqual('Доброго дня!');
});

test('22 hour greeting', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(22)).toEqual('Доброго вечора!');
});

test('out of range', { tag: ['@unit', '@greetByTime'] }, async () => {
  expect(greetByTime(24)).toEqual('невірна година!');
});
