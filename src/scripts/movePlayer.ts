import moveKiller from './moveKiller';
import gameCheck from './gameCheck';

export default function movePlayer(
  x: number,
  y: number,
  room: HTMLDivElement,
  grid: number[][],
  player: HTMLDivElement,
  playerPosition: number[],
  killer: HTMLDivElement,
  killerPosition: number[],
) {
  if (
    (playerPosition[0] === x &&
      (playerPosition[1] === y + 1 || playerPosition[1] === y - 1)) ||
    (playerPosition[1] === y &&
      (playerPosition[0] === x + 1 || playerPosition[0] === x - 1))
  ) {
    playerPosition = [x, y];
    player.parentElement?.classList.remove('active-room');
    player.parentElement?.removeChild(player);
    room.appendChild(player);
    room.classList.add('active-room');
    moveKiller(grid, killer, killerPosition);
    gameCheck(playerPosition, killerPosition);
  }
}
