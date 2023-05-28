const killerStart = document.querySelector("#killer-start")!;
const playerStart = document.querySelector("#player-start")!;
const house = document.querySelector("#house")!;
const killer = document.querySelector("#killer")!;
const player = document.querySelector("#player")!;

const grid: number[][] = [];

// The more columns there are, it will be harder for the player (longer to get to the top). The more rows there are, it will be harder for the killer (more guesses around to find player) 3 and 3 are a good, fair start to get a stable app

for (let i = 0; i <= 2; i++) {
  grid.push([]);
  for (let j = 0; j <= 2; j++) {
    const room = document.createElement("div");
    room.className = "room";
    room.addEventListener("click", () => moveCharacter(room));
    house.append(room);
    grid[i].push(j);
  }
}
console.log(grid);

function moveCharacter(room: HTMLDivElement) {
  if (killer.parentElement === room) {
    // lose game
  } else {
    player.parentElement?.removeChild(player);
    room.appendChild(player);
  }
}
