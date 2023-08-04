import smartKiller from './smartKiller';

export default function moveKiller(
  killer: HTMLDivElement,
  killerPosition: number[],
  playerPosition: number[],
  killerType: string,
): number[] {
  const move = smartKiller(killerPosition, playerPosition);
  killer.parentElement?.removeChild(killer);
  document.querySelector(`.r${move[0]}${move[1]}`)?.appendChild(killer);
  return move;
  console.log(killerType);
}
