function orderFood(list) {
const result = {};
list.map(v => result[v.meal] = result[v.meal] ? result[v.meal] + 1 : 1);
    return result;
}