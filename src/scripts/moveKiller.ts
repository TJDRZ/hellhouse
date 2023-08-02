import getRandomInt from './getRandomInt';
import smartKiller from './smartKiller';

export default function moveKiller(
  grid: number[][],
  killer: HTMLDivElement,
  killerPosition: number[],
  playerPosition: number[],
  difficulty: string,
): number[] {
  if (difficulty === 'hard') {
    const move = smartKiller(killerPosition, playerPosition);
    killer.parentElement?.removeChild(killer);
    document.querySelector(`.r${move[0]}${move[1]}`)?.appendChild(killer);
    return move;
  }
  const row = getRandomInt(grid[0].length);
  const column = getRandomInt(grid.length);
  if (
    killerPosition[0] !== row &&
    (killerPosition[0] === row + 1 || killerPosition[0] === row - 1)
  ) {
    killer.parentElement?.removeChild(killer);
    document.querySelector(`.r${row}${killerPosition[1]}`)?.appendChild(killer);
    return [row, killerPosition[1]];
  }
  if (
    killerPosition[1] !== column &&
    (killerPosition[1] === column + 1 || killerPosition[1] === column - 1)
  ) {
    killer.parentElement?.removeChild(killer);
    document
      .querySelector(`.r${killerPosition[0]}${column}`)
      ?.appendChild(killer);
    return [killerPosition[0], column];
  }
  return moveKiller(grid, killer, killerPosition, playerPosition, difficulty);
}
