function findNextSquare(sq) {
    let number = Math.sqrt(sq);
    return Number.isInteger(number) ? (number + 1) * (number + 1) : -1;
  }