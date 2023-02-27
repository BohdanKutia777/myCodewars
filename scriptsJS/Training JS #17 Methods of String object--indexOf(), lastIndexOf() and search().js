function firstToLast(str,c){
let first = str.indexOf(c);
let last = str.lastIndexOf(c);
let lenght = last - first;
    return str.includes(c) ? lenght : str.indexOf(c); 
}