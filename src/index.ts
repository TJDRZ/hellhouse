import './styles/reset.css';
import './styles/styles.css';
import createHouse from './scripts/createHouse';
import deleteHouse from './scripts/deleteHouse';

const startDialog = document.querySelector(
  '#start-dialog',
) as HTMLDialogElement;
const difficultyForm = document.querySelector(
  '#difficulty-form',
) as HTMLFormElement;
const resultDialog = document.querySelector(
  '#result-dialog',
) as HTMLDialogElement;

const grid: number[][] = [];
const killerPosition: number[] = [];
const playerPosition: number[] = [];

function difficultySetUp() {
  startDialog.showModal();
  difficultyForm.addEventListener('submit', (e) => {
    e.stopImmediatePropagation();
    const value = document.querySelector(
      'input[name="difficulty"]:checked',
    ) as HTMLInputElement;
    createHouse(Number(value.value), grid, killerPosition, playerPosition);
  });
}

resultDialog.addEventListener('submit', () => {
  resultDialog.classList.remove(...resultDialog.classList);
  deleteHouse(grid, killerPosition, playerPosition);
  difficultySetUp();
});

difficultySetUp();
