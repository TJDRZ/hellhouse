import deleteHouse from './deleteHouse';
import movePlayer from './movePlayer';
import moveKiller from './moveKiller';
import gameCheck from './gameCheck';

const startDialog = document.querySelector(
  '#start-dialog',
) as HTMLDialogElement;
const difficultyForm = document.querySelector(
  '#difficulty-form',
) as HTMLFormElement;
const house = document.querySelector('#house')!;
const resultDialog = document.querySelector(
  '#result-dialog',
) as HTMLDialogElement;
const killer = document.createElement('div');
killer.id = 'killer';
const player = document.createElement('div');
player.id = 'player';

const grid: number[][] = [];
const killerPosition: number[] = [];
const playerPosition: number[] = [];

// easy(7x7), medium(5x5), or hard(3x3) pick
// row for killer will be 0
// row for player will be max length - 1
// column for killer will be max length / 2 .floor
// column for player will be max length / 2 .ceil (start a little opposite)

export default function createHouse(difficulty: number) {
  killerPosition.push(0);
  killerPosition.push(1);
  playerPosition.push(2);
  playerPosition.push(1);

  for (let x = 0; x < difficulty; x += 1) {
    grid.push([]);
    for (let y = 0; y < difficulty; y += 1) {
      grid[x].push(y);
      const room = document.createElement('div');
      room.classList.add('room');
      room.classList.add(`r${x}${y}`);
      room.addEventListener('click', () => {
        const newPlayerPosition = movePlayer(
          x,
          y,
          room,
          player,
          playerPosition,
        );
        const newKillerPosition = moveKiller(grid, killer, killerPosition);
        while (killerPosition.length > 0) killerPosition.pop();
        while (playerPosition.length > 0) playerPosition.pop();
        killerPosition.push(newKillerPosition[0]);
        killerPosition.push(newKillerPosition[1]);
        playerPosition.push(newPlayerPosition[0]);
        playerPosition.push(newPlayerPosition[1]);
        gameCheck(playerPosition, killerPosition);
      });
      house.append(room);
      if (room.classList.contains('r01')) room.append(killer);
      if (room.classList.contains('r21')) {
        room.append(player);
        room.classList.add('active-room');
      }
    }
  }
}
resultDialog.addEventListener('submit', () => {
  resultDialog.classList.remove(...resultDialog.classList);
  deleteHouse(grid, killerPosition, playerPosition);
  startDialog.showModal();
  difficultyForm.addEventListener('submit', () => {
    const value = document.querySelector(
      'input[name="difficulty"]:checked',
    ) as HTMLInputElement;
    createHouse(Number(value.value));
  });
});
