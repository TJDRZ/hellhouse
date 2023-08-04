import createEscapeRoom from './createEscapeRoom';
import movePlayer from './movePlayer';
import moveKiller from './moveKiller';
import gameCheck from './gameCheck';

const house = document.querySelector('#house') as HTMLDivElement;
const killer = document.createElement('div');
killer.id = 'killer';
const player = document.createElement('div');
player.id = 'player';

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
        const newPlayerPosition = movePlayer(
          x,
          y,
          room,
          player,
          playerPosition,
        );
        if (newPlayerPosition[0] !== -1) {
          while (playerPosition.length > 0) playerPosition.pop();
          playerPosition.push(newPlayerPosition[0]);
          playerPosition.push(newPlayerPosition[1]);
          const newKillerPosition = moveKiller(
            killer,
            killerPosition,
            playerPosition,
            killerType,
          );
          while (killerPosition.length > 0) killerPosition.pop();
          killerPosition.push(newKillerPosition[0]);
          killerPosition.push(newKillerPosition[1]);
          gameCheck(playerPosition, killerPosition, escapeRoom.coordinates);
        }
      });
      house.append(room);
      if (room.classList.contains(`r${killerRowStart}${killerColumnStart}`))
        room.append(killer);
      if (room.classList.contains(`r${playerRowStart}${playerColumnStart}`)) {
        room.append(player);
        room.classList.add('active-room');
      }
    }
  }

  house.style.gridTemplateColumns = `repeat(${mapSize}, 1fr)`;
  house.style.gridTemplateRows = `repeat(${mapSize}, 1fr)`;
}
