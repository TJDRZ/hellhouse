import createHouse from '../scripts/createHouse';

document.body.innerHTML =
  '<div id="house"></div><div id="killer"></div>';

const killerPosition: number[] = [];
const playerPosition: number[] = [];

describe('Starting positions created', () => {
  createHouse(4, 'skeleton', killerPosition, playerPosition);
  test('Killer starting position created', () => {
    expect(killerPosition[0]).toEqual(0);
    expect(killerPosition[1]).toEqual(2);
  });

  test('Player starting position created', () => {
    expect(playerPosition[0]).toEqual(3);
    expect(playerPosition[1]).toEqual(2);
  });
});

describe('House creation', () => {
  test('House filled with correct room count', () => {});

  test('Rooms receive proper event listener', () => {}); // not sure on this one
});
