import processTurn from '../scripts/processTurn';

// HTML Dialog element does not have support on jsdom
HTMLDialogElement.prototype.showModal = jest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});

document.body.innerHTML =
  '<div id="room"></div><div id="player"></div><div id="killer"></div><dialog id="result-dialog"><p id="result-dialog-text"></p></dialog>';

const room = document.querySelector('#room') as HTMLDivElement;

const killerPosition = [0, 3];

describe('Continues with turn only if player makes a legal move', () => {
  test('Player makes an illegal move', () => {
    processTurn(room, [0, 0], [0, 2], killerPosition, 'skeleton', [0, 0]);
    expect(killerPosition[0]).toEqual(0);
    expect(killerPosition[1]).toEqual(3);
  });

  test('Player makes a legal move', () => {
    processTurn(room, [0, 0], [0, 1], killerPosition, 'skeleton', [0, 0]);
    expect(killerPosition[0]).toEqual(0);
    expect(killerPosition[1]).toEqual(2);
  });
});
