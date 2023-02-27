const DNAStrand = dna => {
    let pairs = {A:'T',T:'A',C:'G',G:'C'};
    return dna.replace(/./g, c => pairs[c]);
  }