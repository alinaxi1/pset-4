const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positive = Number(readlineSync.question("\nPositive integer: "));
var factor = "0";

while (Number.isNaN(positive) || positive < MIN || positive > MAX || !Number.isInteger(positive)) {
  positive = Number(readlineSync.question("Positive integer: "));
}

while (positive >= MIN && positive <= MAX && Number.isInteger(positive)) {
  for (var i = 1; i <= positive; i++) {
    if (positive % i == 0) {
        factor += ',' + i;
        console.log(factor)
        break;
    }
}
}
