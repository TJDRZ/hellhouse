import './styles/reset.css';
import './styles/styles.css';
import createHouse from './scripts/createHouse';
import deleteHouse from './scripts/deleteHouse';

const startDialog = document.querySelector(
  '#start-dialog',
) as HTMLDialogElement;
const gameSetUpForm = document.querySelector(
  '#game-setup-form',
) as HTMLFormElement;
const resultDialog = document.querySelector(
  '#result-dialog',
) as HTMLDialogElement;

const killerPosition: number[] = [];
const playerPosition: number[] = [];

function gameSetUp() {
  startDialog.showModal();
  gameSetUpForm.addEventListener('submit', (e) => {
    e.stopImmediatePropagation();
    const mapSize = document.querySelector(
      'input[name="map-size"]:checked',
    ) as HTMLInputElement;
    const killerType = document.querySelector(
      'input[name="killer-type"]:checked',
    ) as HTMLInputElement;
    createHouse(
      Number(mapSize.value),
      killerType.value,
      killerPosition,
      playerPosition,
    );
  });
}

resultDialog.addEventListener('submit', () => {
  resultDialog.classList.remove(...resultDialog.classList);
  deleteHouse(killerPosition, playerPosition);
  gameSetUp();
});

gameSetUp();
