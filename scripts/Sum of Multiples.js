function sumMul(n,m){
    if( m <= n ) {
    return 'INVALID';
  }
    let counter = 0;
    for(let i = n; i < m; i+=n) {
    counter += i;
    }
    return counter;
  }