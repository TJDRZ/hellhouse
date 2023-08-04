import createEscapeRoom from './createEscapeRoom';
import processTurn from './processTurn';

const house = document.querySelector('#house') as HTMLDivElement;
const killer = document.querySelector('#killer') as HTMLDivElement;
const player = document.querySelector('#player') as HTMLDivElement;

export default function createHouse(
  mapSize: number,
  killerType: string,
  killerPosition: number[],
  playerPosition: number[],
) {
  const killerRowStart = 0;
  const killerColumnStart = Math.floor(mapSize / 2);
  const playerRowStart = mapSize - 1;
  const playerColumnStart = Math.floor(mapSize / 2);

  killerPosition.push(killerRowStart);
  killerPosition.push(killerColumnStart);
  playerPosition.push(playerRowStart);
  playerPosition.push(playerColumnStart);

  const escapeRoom = createEscapeRoom(mapSize);

  for (let x = 0; x < mapSize; x += 1) {
    for (let y = 0; y < mapSize; y += 1) {
      const room = document.createElement('div');
      room.classList.add('room');
      room.classList.add(`r${x}${y}`);
      if (room.classList.contains(escapeRoom.class)) {
        room.classList.add('escape-room');
      }
      room.addEventListener('click', () => {
        processTurn(
          room,
          [x, y],
          playerPosition,
          killerPosition,
          killerType,
          escapeRoom.position,
          );
      });
      house.append(room);
      if (room.classList.contains(`r${killerRowStart}${killerColumnStart}`)) {
        room.append(killer);
      }
      if (room.classList.contains(`r${playerRowStart}${playerColumnStart}`)) {
        room.append(player);
        room.classList.add('active-room');
      }
    }
  }

  house.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
  house.style.gridTemplateRows = `repeat(${mapSize}, 1fr)`;

  killer.className = killerType;
}
