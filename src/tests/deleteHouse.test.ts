import deleteHouse from '../scripts/deleteHouse';

const grid: number[][] = [];
const killerPosition: number[] = [];
const playerPosition: number[] = [];

beforeEach(() => {
  for (let x = 0; x < 3; x += 1) {
    grid.push([]);
    for (let y = 0; y < 3; y += 1) {
      grid[x].push(y);
    }
  }
  killerPosition.push(1);
  killerPosition.push(1);
  playerPosition.push(1);
  playerPosition.push(1);
});

test('Empties grid', () => {
  deleteHouse(grid, killerPosition, playerPosition);
  expect(grid).toHaveLength(0);
});

test('Empties killerPosition', () => {
  deleteHouse(grid, killerPosition, playerPosition);
  expect(killerPosition).toHaveLength(0);
});

test('Empties playerPosition', () => {
  deleteHouse(grid, killerPosition, playerPosition);
  expect(playerPosition).toHaveLength(0);
});
