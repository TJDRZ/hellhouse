import movePlayer from '../scripts/movePlayer';

document.body.innerHTML = '<div id="mock-room"></div>';
const mockRoom = document.querySelector('#mock-room') as HTMLDivElement;

document.body.innerHTML = '<div id="mock-player"></div>';
const mockPlayer = document.querySelector('#mock-player') as HTMLDivElement;

test('Player stays still on current room click', () => {
  expect(movePlayer(mockRoom, [1, 1], mockPlayer, [1, 1])).toEqual([1, 1]);
});

test('Player moves to correct room on legal move', () => {
  expect(movePlayer(mockRoom, [2, 1], mockPlayer, [1, 1])).toEqual([2, 1]);
});

test('Illegal move returns -1', () => {
  expect(movePlayer(mockRoom, [2, 2], mockPlayer, [1, 1])[0]).toBe(-1);
});
