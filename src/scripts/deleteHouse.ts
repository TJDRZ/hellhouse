import turnCounter from "./turnCounter";

const house = document.querySelector('#house') as HTMLDivElement;
const killer = document.querySelector('#killer') as HTMLDivElement;

export default function deleteHouse(
  killerPosition: number[],
  playerPosition: number[],
) {
  while (house?.firstChild) {
    house.removeChild(house.firstChild);
  }
  while (killerPosition.length > 0) killerPosition.pop();
  while (playerPosition.length > 0) playerPosition.pop();
  killer.style.display = 'block';
  turnCounter.reset();
}
