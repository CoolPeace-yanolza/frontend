import { exampleMinus } from '..';

test('1 빼기 2는 -1이다.', () => {
  expect(exampleMinus(1, 2)).toBe(-1);
});

test('1 빼기 2는 0이 아니다.', () => {
  expect(exampleMinus(1, 2)).not.toBe(0);
});
