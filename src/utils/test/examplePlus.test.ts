import { examplePlus } from '..';

test('1 더하기 2는 3이다.', () => {
  expect(examplePlus(1, 2)).toBe(3);
});

test('1 더하기 2는 4가 아니다.', () => {
  expect(examplePlus(1, 2)).not.toBe(4);
});
