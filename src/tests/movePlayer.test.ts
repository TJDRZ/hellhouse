import movePlayer from '../scripts/movePlayer';

document.body.innerHTML =
  '<div id="room1"></div><div id="room2"></div><div id="player"></div>';

const room1 = document.querySelector('#room1') as HTMLDivElement;
const room2 = document.querySelector('#room2') as HTMLDivElement;

describe('Player can only make legal moves', () => {
  test('Player stays still on current room click', () => {
    expect(movePlayer(room1, [1, 1], [1, 1])).toEqual([1, 1]);
  });
  test('Player moves to correct room on legal move', () => {
    expect(movePlayer(room1, [2, 1], [1, 1])).toEqual([2, 1]);
  });
  test('Illegal move returns -1', () => {
    expect(movePlayer(room1, [2, 2], [1, 1])[0]).toEqual(-1);
  });
});

describe('active-room class is added to the proper div', () => {
  movePlayer(room1, [0, 0], [0, 1]);
  test('Correct room receives the active-room class', () => {
    expect(room1.classList).toContain('active-room');
  });
  test('Another room does not have the active-room class', () => {
    expect(room2.classList.contains('active-room')).toBeFalsy();
  });
});

describe('active-room div contains player div', () => {
  movePlayer(room1, [0, 0], [0, 1]);
  test('Correct room receives the player div', () => {
    expect(room1.innerHTML).toContain('<div id="player"></div>');
  });
  test('Another room does not have the player div', () => {
    expect(room2.innerHTML.includes('<div id="player"></div>')).toBeFalsy();
  });
});
