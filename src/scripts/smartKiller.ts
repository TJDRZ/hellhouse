export default function smartKiller(
  killerPosition: number[],
  playerPosition: number[],
) {
  if (
    // Same row and column
    killerPosition[0] === playerPosition[0] &&
    killerPosition[1] === playerPosition[1]
  ) {
    return playerPosition;
  }
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
  if (killerPosition[0] === playerPosition[0]) {
    // Same row, if column higher or lower then move in that direction
    if (playerPosition[1] > killerPosition[1]) {
      return [killerPosition[0], killerPosition[1] + 1];
    }
    return [killerPosition[0], killerPosition[1] - 1];
  }
  if (killerPosition[1] === playerPosition[1]) {
    // Same column, if row higher or lower then move in that direction
    if (playerPosition[0] > killerPosition[0]) {
      return [killerPosition[0] + 1, killerPosition[1]];
    }
    return [killerPosition[0] - 1, killerPosition[1]];
  }
  // Prioritize moving rows towards player
  if (playerPosition[0] > killerPosition[0]) {
    return [killerPosition[0] + 1, killerPosition[1]];
  }
  return [killerPosition[0] - 1, killerPosition[1]];
}
