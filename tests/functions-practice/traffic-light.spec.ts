import { test, expect } from '@playwright/test';

function trafficLight(color: 'green' | 'red' | 'yellow') {
  if (color === 'green') {
    return `Переходьте`;
  } else if (color === 'red') {
    return `Зачекайте`;
  } else {
    return `Підготуйтесь`;
  }
}

test('GO!', { tag: ['@unit'] }, () => {
  expect(trafficLight('green')).toEqual('Переходьте');
});

test('Wait!', { tag: ['@unit'] }, () => {
  expect(trafficLight('red')).toEqual('Зачекайте');
});

test('Ready!', { tag: ['@unit'] }, () => {
  expect(trafficLight('yellow')).toEqual('Підготуйтесь');
});
