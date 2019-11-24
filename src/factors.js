const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let num = Number(readlineSync.question("\nPositive integer: "));
let factor = 0;

while (Number.isNaN(num) || num < MIN || num > MAX || !Number.isInteger(num)) {
  num = Number(readlineSync.question("Positive integer: "));
}

process.stdout.write("\n");

for (var i = 1; i * i <= num; i++) {
  if (num % i == 0)  {
    factors = (i == (num / i)) ? i + ".\n " : i + ", " + num / i + ", "
    process.stdout.write(factors);
  }

}
