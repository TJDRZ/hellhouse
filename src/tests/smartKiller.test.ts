import smartKiller from '../scripts/smartKiller';

test('Killer kills, if possible', () => {
  expect(smartKiller([1, 1], [2, 1])[0]).toEqual(2);
  expect(smartKiller([1, 1], [2, 1])[1]).toEqual(1);
});

test('Killer stays on same axis as player and moves closer, if possible', () => {
  expect(smartKiller([0, 0], [0, 2])[0]).toEqual(0);
  expect(smartKiller([0, 0], [0, 2])[1]).toEqual(1);
});
