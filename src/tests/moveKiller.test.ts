import moveKiller from '../scripts/moveKiller';

document.body.innerHTML = '<div id="mock-killer"></div>';
const mockKiller = document.querySelector('#mock-killer') as HTMLDivElement;

test('Killer can only move 1 row up or down', () => {
  expect(
    moveKiller(
      [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
      mockKiller,
      [1, 1],
      [2, 2],
      5,
    )[0],
  ).toBeLessThanOrEqual(2);
  expect(
    moveKiller(
      [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
      mockKiller,
      [1, 1],
      [2, 2],
      5,
    )[0],
  ).toBeGreaterThanOrEqual(0);
});

test('Killer cannot go off board', () => {
  expect(
    moveKiller(
      [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
      mockKiller,
      [0, 1],
      [2, 2],
      5,
    )[0],
  ).toBeLessThanOrEqual(1);
  expect(
    moveKiller(
      [
        [0, 1, 2],
        [0, 1, 2],
        [0, 1, 2],
      ],
      mockKiller,
      [1, 1],
      [2, 2],
      5,
    )[0],
  ).toBeGreaterThanOrEqual(0);
});
