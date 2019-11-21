const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let sum = 0;
process.stdout.write("\n");

while (Number.isNaN(positive) || positive < MIN || positive > MAX || !Number.isInteger(positive)) {
  var positive = Number(readlineSync.question("Positive Integer: "));
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
