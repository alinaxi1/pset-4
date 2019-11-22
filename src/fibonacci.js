const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

let num1 = 0;
let num2 = 1;
let result = 1;

process.stdout.write("\n");

while (Number.isNaN(n) || n < MIN || n > MAX || !Number.isInteger(n)) {
  var n = Number(readlineSync.question("Positive integer: "));
}

while (n >= MIN && n <= MAX && Number.isInteger(n)) {
  for (var i = 2; i <= n; i++) {
      result = num1 + num2;
      num1 = num2;
      num2 = result;
  }
  result = result.toLocaleString('en');
  console.log("\n" + result + ".");
  return result;
}
