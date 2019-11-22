const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positive = Number(readlineSync.question("\nPositive integer: "));
let sum = 0;

while (Number.isNaN(positive) || positive < MIN || positive > MAX || !Number.isInteger(positive)) {
  positive = Number(readlineSync.question("Positive integer: "));
}

process.stdout.write("\n");

while (positive > 0) {
  let digit = positive % 10;
  positive = Math.floor(positive / 10);

  if (digit % 2 === 1) {
   sum = sum + digit;
  }

}

console.log("\n" + sum);
