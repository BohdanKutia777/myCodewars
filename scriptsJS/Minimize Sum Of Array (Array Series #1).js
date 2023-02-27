const minSum = arr => {
    const sorted = arr.sort((a,b) => a - b)
    let result = 0;
    for (let i=0;i<arr.length/2;i++){
      result += sorted[i] * sorted[sorted.length-1-i]
   }
    return result;
  }
  