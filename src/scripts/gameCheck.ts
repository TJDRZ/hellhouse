const resultDialog = document.querySelector(
  '#result-dialog',
) as HTMLDialogElement;
const resultDialogText = document.querySelector(
  '#result-dialog-text',
) as HTMLParagraphElement;

export default function gameCheck(
  playerPosition: number[],
  killerPosition: number[],
  escapeRoom: number[],
) {
  if (
    killerPosition[0] === playerPosition[0] &&
    killerPosition[1] === playerPosition[1]
  ) {
    resultDialog.classList.add('diedDialog');
    resultDialog.showModal();
    resultDialogText.innerText = 'You Died!';
  } else if (
    playerPosition[0] === escapeRoom[0] &&
    playerPosition[1] === escapeRoom[1]
  ) {
    resultDialog.showModal();
    resultDialogText.innerText = 'You Escaped!';
  }
}
