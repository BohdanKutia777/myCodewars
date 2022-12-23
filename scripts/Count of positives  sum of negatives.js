function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0 ) {
  return [];
  }
    let numberToPos = 0;
    input.forEach((num) => num > 0 ? numberToPos++ : 0);
    const sumNegNum = input.filter(el => el < 0).reduce((acc, el) => acc + el, 0);
    return [numberToPos,sumNegNum];
  }