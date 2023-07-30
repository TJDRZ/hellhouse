import smartKiller from '../scripts/smartKiller';

test('Kills for win if possible', () => {
  // smart killer needs to take in killer current position and player current position
  expect(smartKiller([1, 1], [0, 1])[0].toBeEqualTo(0));
  expect(smartKiller([1, 1], [0, 1])[1].toBeEqualTo(1));
  // moveKiller still must only make a legal move
  // if current player position is a legal move, then killer must take it
});

test('Moves toward the player instead of away', () => {});

test('Stays in between exit and player', () => {});

// do not allow killer to stay still. If player is cornered, it will be a stand still indefinitely

// we need to determine what killer AI to use depending on selection (maybe lets make all maps 3x3 and just make smartKiller and randomKiller - 2 difficulties)
