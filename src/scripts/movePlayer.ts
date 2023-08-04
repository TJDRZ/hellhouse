const player = document.querySelector('#player') as HTMLDivElement;

export default function movePlayer(
  room: HTMLDivElement,
  roomPosition: number[],
  playerPosition: number[],
): number[] {
  const [x, y] = roomPosition;
  // Standing still
  if (playerPosition[0] === x && playerPosition[1] === y) {
    return [x, y];
  }
  // Legal move to new room
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
  // Illegal move made
  return [-1];
}
