const isPythagoreanTriple = (arr) => {
let [n1, n2, n3] = arr.sort((a,b)=> a-b); 
    return (n1*n1 + n2*n2) === (n3*n3);
}