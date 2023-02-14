function freqSeq(str, sep) {
let obj={};
str.split('').map(v=>obj[v]=obj[v]?obj[v]+1:1);
    return str.split('').map(v=>obj[v]).join(sep);
}
   