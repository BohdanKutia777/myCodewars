const isNice = arr => arr.length === 0 ? false : arr.every(v => arr.includes(v+1)||arr.includes(v - 1));
