import getRandomInt from './getRandomInt';

export default function createEscapeRoom(
  mapSize: number,
) {
  let row = getRandomInt(mapSize);
  const column = getRandomInt(mapSize);
  while (row >= mapSize - 2) {
    row = getRandomInt(mapSize - 1);
  }
  return {
    class: `r${row}${column}`,
    position: [row, column],
  };
}
