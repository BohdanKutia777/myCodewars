function well(x){
let count=0;
x.map(v => v.map(v => String(v).toLowerCase() === 'good' ? count += 1 : 1));
if(count < 1) return 'Fail!';
if (count > 2) return 'I smell a series!';
    return 'Publish!';
}