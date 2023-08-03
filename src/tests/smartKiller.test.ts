import smartKiller from '../scripts/smartKiller';

describe('Kills for win if possible', () => {
  test('Moves to row of player', () => {
    expect(smartKiller([1, 1], [0, 1])[0]).toEqual(0);
    expect(smartKiller([1, 1], [0, 1])[1]).toEqual(1);
  });
  test('Moves to column of player', () => {
    expect(smartKiller([1, 1], [1, 0])[0]).toEqual(1);
    expect(smartKiller([1, 1], [1, 0])[1]).toEqual(0);
  });
});

describe('Moves toward the player instead of away', () => {
  test('Moves towards player - down rows', () => {
    expect(smartKiller([1, 1], [2, 2])[0]).toEqual(2);
    expect(smartKiller([1, 1], [2, 2])[1]).toEqual(1);
  });
  test('Moves towards player - up rows', () => {
    expect(smartKiller([1, 1], [0, 0])[0]).toEqual(0);
    expect(smartKiller([1, 1], [0, 0])[1]).toEqual(1);
  });
});