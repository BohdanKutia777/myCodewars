const sumTriangularNumbers = n => {
    let sum = 0;
    let total = 0;
    for(let i=0;i<=n;i++){
      sum += i;
      total += sum;
    }
  return total;
}