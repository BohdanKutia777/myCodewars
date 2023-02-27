function twoHighest(arr) {
    let newArr = [...new Set(arr)];
    if (newArr.length <= 1) {
      return arr;
    }
    let result = newArr.sort((a,b) => b - a);
    return [result[0],result[1]];
  }