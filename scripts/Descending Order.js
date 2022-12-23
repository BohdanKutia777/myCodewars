function descendingOrder(n){
    const numberArr = n + "";
    const result = numberArr.split('').sort((a, b) => b - a).join('');
    return Number(result);
  }