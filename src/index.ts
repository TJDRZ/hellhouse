const killerStart = document.querySelector("#killer-start");
const playerStart = document.querySelector("#player-start");
const house = document.querySelector("#house")!;

for (let i = 1; i <= 6; i++) {
  const room = document.createElement("div");
  room.className = i.toString();
  house.append(room);
}

