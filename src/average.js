const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let negative = Number(readlineSync.question("\nNon-negative Integer: "));
let sum = 0;

while (Number.isNaN(negative) || negative < MIN || negative > MAX || !Number.isInteger(negative)) {
  negative = Number(readlineSync.question("\nNon-negative Integer: "));
}
