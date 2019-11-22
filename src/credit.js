const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 5600000000000000;

process.stdout.write("\n");

while (Number.isNaN(num) || num < MIN || num > MAX || !Number.isInteger(num)) {
  var num = Number(readlineSync.question("Number: "));
}

let nCheck = 0, bEven = false;

  for (var n = num.length - 1; n >= 0; n--) {
    var cDigit = num.charAt(n),
        nDigit = parseInt(cDigit, 10);

    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) == 0;

  if (nCheck == 0 && num.length(15)) {
    console.log("\nAmex.");
  } else if (nCheck == 0 && num.length(16)) {
    console.log("\nMastercard.")
  }
