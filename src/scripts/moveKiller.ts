import getRandomInt from './getRandomInt';

export default function moveKiller(
  grid: number[][],
  killer: HTMLDivElement,
  killerPosition: number[],
) {
  const row = getRandomInt(grid[0].length);
  const column = getRandomInt(grid.length);
  if (
    killerPosition[0] !== row &&
    (killerPosition[0] === row + 1 || killerPosition[0] === row - 1)
  ) {
    killerPosition = [row, killerPosition[1]];
  } else if (
    killerPosition[1] !== column &&
    (killerPosition[1] === column + 1 || killerPosition[1] === column - 1)
  ) {
    killerPosition = [killerPosition[0], column];
  } else {
    moveKiller(grid, killer, killerPosition);
  }
  killer.parentElement?.removeChild(killer);
  document
    .querySelector(`.r${killerPosition[0]}${killerPosition[1]}`)
    ?.appendChild(killer);
}
