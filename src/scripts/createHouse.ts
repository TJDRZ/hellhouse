import deleteHouse from './deleteHouse';
import movePlayer from './movePlayer';

const house = document.querySelector('#house')!;
const dialog = document.querySelector('#dialog') as HTMLDialogElement;
const killer = document.createElement('div');
killer.id = 'killer';
const player = document.createElement('div');
player.id = 'player';

let grid: number[][];
let killerPosition: number[];
let playerPosition: number[];

export default function createHouse() {
  grid = [];
  killerPosition = [0, 1];
  playerPosition = [2, 1]; // if we can get rid of this we can avoid hardcoding positions + get help down the line of reassigning function parameters. The other files should also be pure functions - make them take something in and return a value and then the parent file (this file?) that calls them is the one that mutates the variable. Maybe we make some global variable that is a calc and that will also affect the x & y in the loops below for dynamic board creation.
  for (let x = 0; x <= 2; x += 1) {
    grid.push([]);
    for (let y = 0; y <= 2; y += 1) {
      const room = document.createElement('div');
      room.classList.add('room');
      room.classList.add(`r${x}${y}`);
      room.addEventListener('click', () =>
        movePlayer(
          x,
          y,
          room,
          grid,
          player,
          playerPosition,
          killer,
          killerPosition,
        ),
      );
      house.append(room);
      grid[x].push(y);
      if (room.classList.contains('r01')) room.append(killer);
      if (room.classList.contains('r21')) {
        room.append(player);
        room.classList.add('active-room');
      }
    }
  }
  dialog.addEventListener('submit', () => {
    dialog.classList.remove(...dialog.classList);
    deleteHouse();
    createHouse();
  });
}
