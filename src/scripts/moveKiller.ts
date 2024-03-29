import smartKiller from './smartKiller';
import turnCounter from './turnCounter';

export default function moveKiller(
  killerPosition: number[],
  playerPosition: number[],
  killerType: string,
): number[] {
  const killer = document.querySelector('#killer') as HTMLDivElement;
  
  const move = smartKiller(killerPosition, playerPosition);
  killer.parentElement?.removeChild(killer);
  document.querySelector(`.r${move[0]}${move[1]}`)?.appendChild(killer);
  turnCounter.increment();
  // The Ghost fades in and out every other turn
  if (killerType === 'ghost') {
    if (turnCounter.turn % 2 !== 0) {
      killer.style.display = 'none';
    } else killer.style.display = 'block';
  }
  // The Vampire takes two moves every 5th turn
  if (killerType === 'vampire' && turnCounter.turn % 5 === 0) {
    const moveTwo = smartKiller(move, playerPosition);
    setTimeout(() => {
      killer.parentElement?.removeChild(killer);
      document
        .querySelector(`.r${moveTwo[0]}${moveTwo[1]}`)
        ?.appendChild(killer);
    }, 300);
    return moveTwo;
  }
  return move;
}
