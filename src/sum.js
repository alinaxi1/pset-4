const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lower = Number(readlineSync.question("\nLower Bound: "));
let upper = Number(readlineSync.question("Upper Bound: "));

while (lower >= upper) {
  lower = Number(readlineSync.question("Lower Bound: "));
  upper = Number(readlineSync.question("Upper Bound: "));
}

if (lower < upper) {

}
