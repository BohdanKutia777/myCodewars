const sumCubes = n =>{
   let result = 0;
   for(let i = 1; i <= n; i++) {
    result += i * i * i;
   }
   return result;
}