import createHouse from '../scripts/createHouse';

document.body.innerHTML =
  '<div id="house"></div><div id="killer"></div><div id="player"></div>';

const house = document.querySelector('#house') as HTMLDivElement;

const killerPosition: number[] = [];
const playerPosition: number[] = [];

beforeAll(() => {
  createHouse(4, 'skeleton', killerPosition, playerPosition);
});

describe('Starting positions created', () => {
  test('Killer starting position created', () => {
    expect(killerPosition[0]).toEqual(0);
    expect(killerPosition[1]).toEqual(2);
    const killerStartingRoom = document.querySelector('.r02') as HTMLDivElement;
    expect(
      killerStartingRoom.innerHTML.includes(
        '<div id="killer" class="skeleton"></div>',
      ),
    ).toBeTruthy();
  });

  test('Player starting position created', () => {
    expect(playerPosition[0]).toEqual(3);
    expect(playerPosition[1]).toEqual(2);
    const playerStartingRoom = document.querySelector('.r32') as HTMLDivElement;
    expect(
      playerStartingRoom.innerHTML.includes('<div id="player"></div>'),
    ).toBeTruthy();
  });
});

describe('House creation', () => {
  test('House filled with correct room count', () => {
    expect(house.childNodes).toHaveLength(16);
  });

  test('Rooms receive proper event listener', () => {
    const room = document.querySelector('.r33') as HTMLDivElement;
    room.click();
    expect(room.innerHTML.includes('<div id="player"></div>')).toBeTruthy();
  });
});
