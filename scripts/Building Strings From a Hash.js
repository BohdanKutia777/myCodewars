const solution = pairs => Object.keys(pairs).map(function(value){return value + " = " + pairs[value];}).join(',');