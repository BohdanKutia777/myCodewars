function vowelIndices(word){
    let filterArr = ['a', 'e', 'i', 'o', 'u', 'y'];
    const indexArr = [];
    const arrWord = word.toLowerCase().split('');
    arrWord.forEach((el, index) => filterArr.indexOf(el) != -1? indexArr.push(index + 1) : false);
    return indexArr;
    
  }
  