const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let prime = 0;

process.stdout.write("\n");

while (Number.isNaN(value) || value < MIN || value > MAX || !Number.isInteger(value)) {
    var value = Number(readlineSync.question("Non-negative Integer: "));

    if (value > 0 && value !== 1 && value !== 2) {
      for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = "\nNot prime.";
            break;
        } else {
            prime = "\nPrime.";
        }
      }
    } else {
      prime = "\nPrime.";
    }
}

console.log(prime);
