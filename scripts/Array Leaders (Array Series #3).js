const arrayLeaders = (numbers) => numbers.filter((v,i,arr) => v > (arr.slice( i + 1).reduce((a,b) => a + b, 0)));