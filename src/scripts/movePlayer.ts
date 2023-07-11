export default function movePlayer(
  x: number,
  y: number,
  room: HTMLDivElement,
  player: HTMLDivElement,
  playerPosition: number[],
): number[]{
  if (playerPosition[0] === x && playerPosition[1] === y) {
    return [x, y];
  }
  if (
    (playerPosition[0] === x &&
      (playerPosition[1] === y + 1 || playerPosition[1] === y - 1)) ||
    (playerPosition[1] === y &&
      (playerPosition[0] === x + 1 || playerPosition[0] === x - 1))
  ) {
    player.parentElement?.classList.remove('active-room');
    player.parentElement?.removeChild(player);
    room.appendChild(player);
    room.classList.add('active-room');
    return [x, y];
  }
  return [-1];
}
