const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let sum = 0;
let num = 0;
let value = Number(readlineSync.question("\nNon-negative Integer: "));

while (value !== -1 && value > MIN && value < MAX && Number.isInteger(value)) {
  value = Number(readlineSync.question("Non-negative Integer: "));

  if (value !== -1) {
      sum = sum + value;
      num++
  }
}
sum = sum / num;
sum = sum.toFixed(3);
sum = sum.toLocaleString('en');
console.log("\n" + sum);
