import gameCheck from '../scripts/gameCheck';

document.body.innerHTML =
  '<dialog id="result-dialog"><p id="result-dialog-text"></p></dialog>';

const resultDialog = document.querySelector(
  '#result-dialog',
) as HTMLDialogElement;
const resultDialogText = document.querySelector(
  '#result-dialog-text',
) as HTMLParagraphElement;

// HTML Dialog element does not have support on jsdom
HTMLDialogElement.prototype.showModal = jest.fn(function mock(
  this: HTMLDialogElement,
) {
  this.open = true;
});

test('Designates a kill and the result-dialog displays properly', () => {
  gameCheck([0, 0], [0, 0], [2, 2]);
  expect(resultDialog.classList.contains('diedDialog')).toBeTruthy();
  expect(resultDialogText.textContent).toMatch('You Died!');
});

test('Designates an escape and the result-dialog displays properly', () => {
  gameCheck([0, 0], [1, 1], [0, 0]);
  expect(resultDialogText.textContent).toMatch('You Escaped!');
});
