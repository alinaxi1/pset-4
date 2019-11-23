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

  num.toString();

  if (num.length == 15 && num.charAt(0) == 3 && (num.charAt(1) == 4 || num.charAt(1) == 7)) {
    console.log("\nAmex.");
  } else if (num.length == 16 && num.charAt(0) == 5 && num.charAt(1) <= 5 && num.charAt(1) >= 1 && nCheck == 0) {
    console.log("\nMastercard.");
  } else if (num.length == (13 || 16) && num.charAt(0) == 4 && nCheck == 0) {
    console.log("\nVisa.");
  } else {
    console.log("\nInvalid.");
  }
  return (nCheck % 10 == 0);
