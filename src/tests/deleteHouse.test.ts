import deleteHouse from '../scripts/deleteHouse';

const killerPosition: number[] = [];
const playerPosition: number[] = [];

beforeEach(() => {
  killerPosition.push(1);
  killerPosition.push(1);
  playerPosition.push(1);
  playerPosition.push(1);
});

test('Empties killerPosition', () => {
  deleteHouse(killerPosition, playerPosition);
  expect(killerPosition).toHaveLength(0);
});

test('Empties playerPosition', () => {
  deleteHouse(killerPosition, playerPosition);
  expect(playerPosition).toHaveLength(0);
});
