import getRandomInt from './getRandomInt';

export default function createEscapeRoom(
  mapSize: number,
  playerPosition: number[],
) {
  let row = getRandomInt(mapSize - 1);
  const column = getRandomInt(mapSize - 1);
  while (row === playerPosition[0]) {
    row = getRandomInt(mapSize - 1);
  }
  return {
    class: `r${row}${column}`,
    coordinates: [row, column],
  };
}
