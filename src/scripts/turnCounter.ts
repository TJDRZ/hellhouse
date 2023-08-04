const turnCounter = {
  turn: 0,
  increment() {
    this.turn += 1;
  },
  reset() {
    this.turn = 0;
  },
};

export default turnCounter;
