const SeriesSum = n => {
    let result = 0;
    let counter = 1;
    for(let i = 1; i <= n;i++ ){
      result += 1/counter;
      counter += 3;
    }
    return result.toFixed(2);
  }