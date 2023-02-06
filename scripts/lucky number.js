function isLucky(n) {
const res=n.toString().split('').reduce((a,b)=>a+b,0);
    return res % 9 === 0 || res === 0;
}