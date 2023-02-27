function bingo(a) {
let count=0;
for (let i=0;i<a.length;i++) {
if (a[i]===2){ count++};
if (a[i]===7){ count++};
if (a[i]===9){ count++};
if (a[i]===14){ count++};
if (a[i]===15){ count++};
    }
    return count >= 5 ? "WIN" : "LOSE";
}