import movePlayer from '../scripts/movePlayer';

document.body.innerHTML =
  '<div id="mock-room1"></div><div id="mock-room2"></div><div id="player"></div>';

const mockRoom1 = document.querySelector('#mock-room1') as HTMLDivElement;
const mockRoom2 = document.querySelector('#mock-room2') as HTMLDivElement;

describe('Player can only make legal moves', () => {
  test('Player stays still on current room click', () => {
    expect(movePlayer(mockRoom1, [1, 1], [1, 1])).toEqual([1, 1]);
  });
  test('Player moves to correct room on legal move', () => {
    expect(movePlayer(mockRoom1, [2, 1], [1, 1])).toEqual([2, 1]);
  });
  test('Illegal move returns -1', () => {
    expect(movePlayer(mockRoom1, [2, 2], [1, 1])[0]).toBe(-1);
  });
});

describe('active-room class is added to the proper div', () => {
  movePlayer(mockRoom1, [0, 0], [0, 1]);
  test('Correct room receives the active-room class', () => {
    expect(mockRoom1.classList).toContain('active-room');
  });
  test('Another room does not have the active-room class', () => {
    expect(mockRoom2.classList.contains('active-room')).toBeFalsy();
  });
});

describe('active-room div contains player div', () => {
  movePlayer(mockRoom1, [0, 0], [0, 1]);
  test('Correct room receives the player div', () => {
    expect(mockRoom1.innerHTML).toContain('<div id="player"></div>');
  });
  test('Another room does not have the player div', () => {
    expect(mockRoom2.innerHTML.includes('<div id="player"></div>')).toBeFalsy();
  });
});
