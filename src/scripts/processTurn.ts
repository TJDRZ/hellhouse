import movePlayer from './movePlayer';
import moveKiller from './moveKiller';
import gameCheck from './gameCheck';

export default function processTurn(
  room: HTMLDivElement,
  roomPosition: number[],
  playerPosition: number[],
  killerPosition: number[],
  killerType: string,
  escapeRoomPosition: number[],
) {
  const newPlayerPosition = movePlayer(
    room,
    roomPosition,
    playerPosition,
  );
  // Continue with turn only if player makes a legal move
  if (newPlayerPosition[0] !== -1) {
    while (playerPosition.length > 0) playerPosition.pop();
    playerPosition.push(newPlayerPosition[0]);
    playerPosition.push(newPlayerPosition[1]);
    const newKillerPosition = moveKiller(
      killerPosition,
      playerPosition,
      killerType,
    );
    while (killerPosition.length > 0) killerPosition.pop();
    killerPosition.push(newKillerPosition[0]);
    killerPosition.push(newKillerPosition[1]);
    gameCheck(playerPosition, killerPosition, escapeRoomPosition);
  }
}
