const house = document.querySelector("#house")!;
const dialog = document.querySelector("#dialog") as HTMLDialogElement;
const dialogText = document.querySelector(
  "#dialog-text"
) as HTMLParagraphElement;
const killer = document.createElement("div");
killer.id = "killer";
killer.innerText = "K";
const player = document.createElement("div");
player.id = "player";
player.innerText = "P";

let grid: number[][];
let killerPosition: number[];
let playerPosition: number[];

dialog.showModal(); //always on - for styling the modal

function createHouse() {
  grid = [];
  killerPosition = [0, 1];
  playerPosition = [2, 1];
  for (let x = 0; x <= 2; x++) {
    grid.push([]);
    for (let y = 0; y <= 2; y++) {
      const room = document.createElement("div");
      room.classList.add("room");
      room.classList.add(`r${x}${y}`);
      room.addEventListener("click", () => movePlayer(x, y, room));
      house.append(room);
      grid[x].push(y);
      if (room.classList.contains("r01")) room.append(killer);
      if (room.classList.contains("r21")) {
        room.append(player);
        room.classList.add("active-room");
      }
    }
  }
}

function deleteHouse() {
  while (house.firstChild) {
    house.removeChild(house.firstChild);
  }
}

function movePlayer(x: number, y: number, room: HTMLDivElement) {
  if (
    (playerPosition[0] === x &&
      (playerPosition[1] === y + 1 || playerPosition[1] === y - 1)) ||
    (playerPosition[1] === y &&
      (playerPosition[0] === x + 1 || playerPosition[0] === x - 1))
  ) {
    playerPosition = [x, y];
    player.parentElement?.classList.remove("active-room");
    player.parentElement?.removeChild(player);
    room.appendChild(player);
    room.classList.add("active-room");
    moveKiller();
    gameCheck();
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function moveKiller() {
  const row = getRandomInt(grid[0].length);
  const column = getRandomInt(grid.length);
  if (
    killerPosition[0] !== row &&
    (killerPosition[0] === row + 1 || killerPosition[0] === row - 1)
  ) {
    killerPosition = [row, killerPosition[1]];
  } else if (
    killerPosition[1] !== column &&
    (killerPosition[1] === column + 1 || killerPosition[1] === column - 1)
  ) {
    killerPosition = [killerPosition[0], column];
  } else {
    moveKiller();
  }
  killer.parentElement?.removeChild(killer);
  document
    .querySelector(`.r${killerPosition[0]}${killerPosition[1]}`)
    ?.appendChild(killer);
}

function gameCheck() {
  let gameOver = false;
  if (
    killerPosition[0] === playerPosition[0] &&
    killerPosition[1] === playerPosition[1]
  ) {
    dialog.showModal();
    dialogText.innerText = "You Died!";
    gameOver = true;
  } else if (playerPosition[0] === 0 && playerPosition[1] === 1) {
    dialog.showModal();
    dialogText.innerText = "You Escaped!";
    gameOver = true;
  }
  if (gameOver) {
    deleteHouse();
    createHouse();
  }
}

createHouse();
