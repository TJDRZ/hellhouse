export default function smartKiller(
  killerPosition: number[],
  playerPosition: number[],
) {
  if (
    // Same row and column +/- 1
    killerPosition[0] === playerPosition[0] &&
    killerPosition[1] === (playerPosition[1] + 1 || playerPosition[1] - 1)
  ) {
    return playerPosition;
  }
  if (
    // Same column and row +/- 1
    killerPosition[1] === playerPosition[1] &&
    killerPosition[0] === (playerPosition[0] + 1 || playerPosition[0] - 1)
  ) {
    return playerPosition;
  }
  // then whatever wasnt true, take that and see if it is +1 or -1 away
  // then if that is true, move to player position
  return [];
}

/*
moveKiller rules for making sure legal move:

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
return moveKiller(grid, killer, killerPosition);
*/
