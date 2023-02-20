function findScreenHeight(width, ratio) {
let a = ratio.split(':');
    return `${width}x${(width*(a[1]*1/a[0]*1))}`;
}