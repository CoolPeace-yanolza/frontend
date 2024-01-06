import { exampleMinus, examplePlus } from '../utils';

test('1 빼기 2는 -1이다.', () => {
  expect(exampleMinus(1, 2)).toBe(-1);
});

test('1 빼기 2는 0이 아니다.', () => {
  expect(exampleMinus(1, 2)).not.toBe(0);
});

test('1 더하기 2는 3이다.', () => {
  expect(examplePlus(1, 2)).toBe(3);
});

test('1 더하기 2는 4가 아니다.', () => {
  expect(examplePlus(1, 2)).not.toBe(4);
});
