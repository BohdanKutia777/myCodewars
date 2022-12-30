const stairsIn20 = s => s
    .reduce((arr, day) => arr.concat(...day), [])
    .reduce((total, stairs) => total + stairs, 0) * 20;