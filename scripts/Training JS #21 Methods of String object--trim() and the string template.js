function fiveLine(s){
const sWithoutWhiteSpace = s.trim();
let result = '';
for (let i = 1; i <= 5; i++) {
    if (i === 5) {
        result += `${sWithoutWhiteSpace.repeat(i)}`;
        break;
        }
    result += `${sWithoutWhiteSpace.repeat(i)}\n`;
    }
    return result;
}