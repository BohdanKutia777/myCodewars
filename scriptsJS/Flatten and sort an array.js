function flattenAndSort(array) {
    const resultArr = array.flatMap(el => el);
    return resultArr.sort((a,b) => a - b);
  }