import moveKiller from '../scripts/moveKiller';
import turnCounter from '../scripts/turnCounter';

document.body.innerHTML =
  '<div id="room1"></div><div id="room2"></div><div id="killer"></div>';

const room1 = document.querySelector('#room1') as HTMLDivElement;
const room2 = document.querySelector('#room2') as HTMLDivElement;
const killer = document.querySelector('#killer') as HTMLDivElement;

beforeEach(() => {
  turnCounter.reset();
});

describe('Correct room div contains killer after move', () => {
  room1.className = 'r01';
  moveKiller([0, 0], [0, 1], 'skeleton');
  test('Correct room receives the killer div', () => {
    expect(room1.innerHTML).toContain('<div id="killer"></div>');
  });
  test('Another room does not have the killer div', () => {
    expect(room2.innerHTML.includes('<div id="killer"></div>')).toBeFalsy();
  });
});

describe('Killer types use their special powers correctly', () => {
  test('The Ghost is invisible after first move', () => {
    moveKiller([0, 0], [0, 1], 'ghost');
    expect(killer.style.display).toBe('none');
  });
  test('The Vampire moves twice every 5th turn', () => {
    for (let i = 0; i <= 3; i += 1) {
      turnCounter.increment();
    }
    const endingLocation = moveKiller([0, 0], [0, 2], 'vampire');
    expect(endingLocation[0]).toEqual(0);
    expect(endingLocation[1]).toEqual(2);
  });
});
