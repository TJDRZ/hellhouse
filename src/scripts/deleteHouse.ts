import turnCounter from './turnCounter';

export default function deleteHouse(
  killerPosition: number[],
  playerPosition: number[],
) {
  const house = document.querySelector('#house') as HTMLDivElement;
  const killer = document.querySelector('#killer') as HTMLDivElement;

  killer.style.display = 'block';
  while (house.firstChild) house.removeChild(house.firstChild);
  while (killerPosition.length > 0) killerPosition.pop();
  while (playerPosition.length > 0) playerPosition.pop();
  turnCounter.reset();
}
