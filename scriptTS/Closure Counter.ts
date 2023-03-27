export function counter(): Function {
  let counter: number = 0;
  function counter2(): number {
    return ++counter;
  }
  return counter2;
}
