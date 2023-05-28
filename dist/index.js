"use strict";
const killerStart = document.querySelector("#killer-start");
const playerStart = document.querySelector("#player-start");
const house = document.querySelector("#house");
const killer = document.querySelector("#killer");
const player = document.querySelector("#player");
const grid = [];
// The more columns there are, it will be harder for the player (longer to get to the top). The more rows there are, it will be harder for the killer (more guesses around to find player) 3 and 3 are a good, fair start to get a stable app
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        const room = document.createElement("div");
        room.className = "room";
        room.addEventListener("click", () => moveCharacter(room));
        house.append(room);
    }
}
function moveCharacter(room) {
    var _a;
    if (killer.parentElement === room) {
        // lose game
    }
    else {
        (_a = player.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(player);
        room.appendChild(player);
    }
}
