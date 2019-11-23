const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let num = Number(readlineSync.question("\nPositive integer: "));
var factor = "0";

while (Number.isNaN(num) || num < MIN || num > MAX || !Number.isInteger(num)) {
  num = Number(readlineSync.question("Positive integer: "));
}

process.stdout.write("\n");
var str = "0";

for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
        str += ',' + i;
    }
}
console.log(str + ".");
return (str);
