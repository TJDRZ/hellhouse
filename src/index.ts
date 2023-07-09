import './styles/reset.css';
import './styles/styles.css';
import createHouse from './scripts/createHouse';

const startDialog = document.querySelector(
  '#start-dialog',
) as HTMLDialogElement;
const difficultyForm = document.querySelector(
  '#difficulty-form',
) as HTMLFormElement;

startDialog.showModal();
difficultyForm.addEventListener('submit', () => {
  const value = document.querySelector(
    'input[name="difficulty"]:checked',
  ) as HTMLInputElement;
  createHouse(Number(value.value));
});
