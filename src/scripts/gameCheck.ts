const dialog = document.querySelector('#dialog') as HTMLDialogElement;
const dialogText = document.querySelector(
  '#dialog-text',
) as HTMLParagraphElement;

export default function gameCheck(
  playerPosition: number[],
  killerPosition: number[],
) {
  if (
    killerPosition[0] === playerPosition[0] &&
    killerPosition[1] === playerPosition[1]
  ) {
    dialog.classList.add('diedDialog');
    dialog.showModal();
    dialogText.innerText = 'You Died!';
  } else if (playerPosition[0] === 0 && playerPosition[1] === 1) {
    dialog.showModal();
    dialogText.innerText = 'You Escaped!';
  }
}
