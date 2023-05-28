"use strict";
const house = document.querySelector("#house");
const killer = document.createElement("div");
killer.id = "killer";
killer.innerText = "K";
const player = document.createElement("div");
player.id = "player";
player.innerText = "P";
let grid;
let killerPosition;
let playerPosition;
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
            if (room.classList.contains("r01"))
                room.append(killer);
            if (room.classList.contains("r21"))
                room.append(player);
        }
    }
}
function deleteHouse() {
    while (house.firstChild) {
        house.removeChild(house.firstChild);
    }
}
function movePlayer(x, y, room) {
    var _a;
    if ((playerPosition[0] === x &&
        (playerPosition[1] === y + 1 || playerPosition[1] === y - 1)) ||
        (playerPosition[1] === y &&
            (playerPosition[0] === x + 1 || playerPosition[0] === x - 1))) {
        playerPosition = [x, y];
        (_a = player.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(player);
        room.appendChild(player);
        killCheck();
        moveKiller();
        killCheck();
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function moveKiller() {
    var _a, _b;
    const row = getRandomInt(grid[0].length);
    const column = getRandomInt(grid.length);
    if (killerPosition[0] !== row &&
        (killerPosition[0] === row + 1 || killerPosition[0] === row - 1)) {
        killerPosition = [row, killerPosition[1]];
    }
    else if (killerPosition[1] !== column &&
        (killerPosition[1] === column + 1 || killerPosition[1] === column - 1)) {
        killerPosition = [killerPosition[0], column];
    }
    else {
        moveKiller();
    }
    (_a = killer.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(killer);
    (_b = document
        .querySelector(`.r${killerPosition[0]}${killerPosition[1]}`)) === null || _b === void 0 ? void 0 : _b.appendChild(killer);
}
function killCheck() {
    if (killerPosition[0] === playerPosition[0] &&
        killerPosition[1] === playerPosition[1]) {
        console.log("End game");
        deleteHouse();
        createHouse();
    }
}
createHouse();
