import createEscapeRoom from '../scripts/createEscapeRoom';

const escapeRoom = createEscapeRoom(5);

test('Class and position returned match each other', () => {
  expect(`r${escapeRoom.position[0]}${escapeRoom.position[1]}`).toMatch(
    escapeRoom.class,
  );
});

test("Escape room is at least 2 rows away from player's starting position", () => {
  expect(escapeRoom.position[0]).toBeLessThanOrEqual(2);
});
