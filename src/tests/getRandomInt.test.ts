import getRandomInt from '../scripts/getRandomInt';

test('Receive random integer 3 or less', () => {
  expect(getRandomInt(3)).toBeLessThanOrEqual(3);
  expect(getRandomInt(3)).toBeGreaterThanOrEqual(0);
});

test('Receive random integer 5 or less', () => {
  expect(getRandomInt(5)).toBeLessThanOrEqual(5);
  expect(getRandomInt(5)).toBeGreaterThanOrEqual(0);
});
