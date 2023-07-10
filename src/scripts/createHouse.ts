import movePlayer from './movePlayer';
import moveKiller from './moveKiller';
import gameCheck from './gameCheck';

const house = document.querySelector('#house') as HTMLDivElement;
const killer = document.createElement('div');
killer.id = 'killer';
const player = document.createElement('div');
player.id = 'player';

// maybe make another image that starts on the killer starting point so you know where the escape is?

// why cant I lose on medium? it runs away or something

export default function createHouse(
  difficulty: number,
  grid: number[][],
  killerPosition: number[],
  playerPosition: number[],
) {
  const killerRowStart = 0;
  const killerColumnStart = Math.floor(difficulty / 2);
  const playerRowStart = difficulty - 1;
  const playerColumnStart = Math.floor(difficulty / 2);

  killerPosition.push(killerRowStart);
  killerPosition.push(killerColumnStart);
  playerPosition.push(playerRowStart);
  playerPosition.push(playerColumnStart);

  for (let x = 0; x < difficulty; x += 1) {
    grid.push([]);
    for (let y = 0; y < difficulty; y += 1) {
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
        const newKillerPosition = moveKiller(grid, killer, killerPosition);
        while (killerPosition.length > 0) killerPosition.pop();
        while (playerPosition.length > 0) playerPosition.pop();
        killerPosition.push(newKillerPosition[0]);
        killerPosition.push(newKillerPosition[1]);
        playerPosition.push(newPlayerPosition[0]);
        playerPosition.push(newPlayerPosition[1]);
        gameCheck(playerPosition, killerPosition);
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

  house.style.gridTemplateColumns = `repeat(${difficulty}, 1fr)`;
  house.style.gridTemplateRows = `repeat(${difficulty}, 1fr)`;
}
