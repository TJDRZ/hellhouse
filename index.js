"use strict";
// The more columns there are, it will be harder for the player (longer to get to the top). The more rows there are, it will be harder for the killer (more guesses around to find player) 3 and 3 are a good, fair start to get a stable app
const killerStart = document.querySelector("#killer-start");
const playerStart = document.querySelector("#player-start");
const house = document.querySelector("#house");
const killer = document.querySelector("#killer");
const player = document.querySelector("#player");
const grid = [];
for (let x = 0; x <= 2; x++) {
    grid.push([]);
    for (let y = 0; y <= 2; y++) {
        const room = document.createElement("div");
        room.className = "room";
        room.addEventListener("click", () => moveCharacter(x, y, room));
        house.append(room);
        grid[x].push(y);
    }
}
let killerPosition = [-1, 1];
let playerPosition = [3, 1];
function moveCharacter(x, y, room) {
    var _a;
    if ((playerPosition[0] === x &&
        (playerPosition[1] === y + 1 || playerPosition[1] === y - 1)) ||
        (playerPosition[1] === y &&
            (playerPosition[0] === x + 1 || playerPosition[0] === x - 1))) {
        playerPosition = [x, y];
        (_a = player.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(player);
        room.appendChild(player);
    }
}
