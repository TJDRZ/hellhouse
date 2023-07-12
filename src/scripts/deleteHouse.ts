const house = document.querySelector('#house') as HTMLDivElement;

export default function deleteHouse(
  grid: number[][],
  killerPosition: number[],
  playerPosition: number[],
) {
  while (house?.firstChild) {
    house.removeChild(house.firstChild);
  }
  while (grid.length > 0) grid.pop();
  while (killerPosition.length > 0) killerPosition.pop();
  while (playerPosition.length > 0) playerPosition.pop();
}
