import deleteHouse from '../scripts/deleteHouse';

document.body.innerHTML =
  '<div id="house"><div id="room"></div></div><div id="killer"></div>';

const mockHouse = document.querySelector('#house') as HTMLDivElement;
const killer = document.querySelector('#killer') as HTMLDivElement;

const killerPosition: number[] = [];
const playerPosition: number[] = [];

beforeEach(() => {
  killerPosition.push(1);
  killerPosition.push(1);
  playerPosition.push(1);
  playerPosition.push(1);
});

test('Killer display style becomes "block"', () => {
  deleteHouse(killerPosition, playerPosition);
  expect(killer.style.display).toBe('block');
});

test('Empties house of children elements', () => {
  deleteHouse(killerPosition, playerPosition);
  expect(mockHouse.innerHTML.includes('<div id="room"></div>')).toBeFalsy();
});

test('Empties killerPosition', () => {
  deleteHouse(killerPosition, playerPosition);
  expect(killerPosition).toHaveLength(0);
});

test('Empties playerPosition', () => {
  deleteHouse(killerPosition, playerPosition);
  expect(playerPosition).toHaveLength(0);
});
