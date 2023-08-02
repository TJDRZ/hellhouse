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
  difficulty: string,
  grid: number[][],
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

  for (let x = 0; x < mapSize; x += 1) {
    grid.push([]);
    for (let y = 0; y < mapSize; y += 1) {
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
        if (newPlayerPosition[0] !== -1) {
          while (playerPosition.length > 0) playerPosition.pop();
          playerPosition.push(newPlayerPosition[0]);
          playerPosition.push(newPlayerPosition[1]);
          const newKillerPosition = moveKiller(
            grid,
            killer,
            killerPosition,
            playerPosition,
            difficulty,
          );
          while (killerPosition.length > 0) killerPosition.pop();
          killerPosition.push(newKillerPosition[0]);
          killerPosition.push(newKillerPosition[1]);
          gameCheck(playerPosition, killerPosition, killerColumnStart);
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
