const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let sum = 0;
let num = 0;
let value = 0;
process.stdout.write("\n");

while (value >= MIN && value <= MAX && Number.isInteger(value)) {
  value = Number(readlineSync.question("Non-negative Integer: "));

  if (value > 0) {
      sum = sum + value;
      num++;
  }

}

sum = sum / num;
sum = sum.toLocaleString("en", {minimumFractionDigits: 3, maximumFractionDigit: 3});

console.log("\n" + sum + ".");
