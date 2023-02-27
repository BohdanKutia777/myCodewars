function roundIt(n){
let [left, right] = n.toString().split('.').map(x => x.length);
let dx = left - right;
let fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round;
    return fn(n)
}