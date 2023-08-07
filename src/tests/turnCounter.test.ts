import turnCounter from '../scripts/turnCounter';

test('Gets current turn count', () => {
  expect(turnCounter.turn).toEqual(0);
});

test('Increments turn count', () => {
  turnCounter.increment();
  expect(turnCounter.turn).toEqual(1);
});

test('Resets turn count', () => {
  turnCounter.reset();
  expect(turnCounter.turn).toEqual(0);
});
