const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lower = Number(readlineSync.question("\nLower bound: "));
let upper = Number(readlineSync.question("Upper bound: "));
let sum = 0;

while (lower >= upper || Number.isNaN(lower) || Number.isNaN(upper) || MIN > lower || MAX < upper || !Number.isInteger(lower) || !Number.isInteger(upper)) {
  lower = Number(readlineSync.question("Lower bound: "));
  upper = Number(readlineSync.question("Upper bound: "));
}

for (let i = lower; i <= upper; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

sum = sum.toLocaleString('en');
console.log("\n" + sum + ".");
