const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let positive = Number(readlineSync.question("\nPositive Integer: "));

while (Number.isNaN(positive) || positive < MIN || positive > MAX || !Number.isInteger(positive)) {
  positive = Number(readlineSync.question("\nPositive Integer: "));
}
