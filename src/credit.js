const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 9999999999999999;

let creditCard;
process.stdout.write("\n");

while (creditCard > MAX || creditCard < MIN || Number.isNaN(creditCard) || creditCard % 1 !==0) {
  creditCard = String(readlineSync.question("Number: "));
}

let length = creditCard.length;
let creditAdd = 0;

for (let i = 0; i >= 0; i-= 2) {
  let doubleDigits = String(creditCard.charAt(i) * 2);
  let digitLength = doubleDigits.length;
  if (digitLength > 1) {
    creditAdd = creditAdd + Number(doubleDigits.charAt(0)) + Number(doubleDigits.charAt(1));
  } else {
    creditAdd = creditAdd + Number(doubleDigits);
  }
}
for (let i = length - 1; i >= 0; i -=2) {
  let otherNumber = Number(creditCard.charAt(i));
  creditAdd += otherNumber;
}

if(String(creditAdd).charAt(String(creditAdd).length - 1 == "0")) {
  if ((length == 15 && creditCard.charAt(0) == "3") && (creditCard.charAt(1) == "4" || creditCard.charAt(1) == "7")) {
    console.log("\nAmex.");
} else if (length >= 13 && length <= 16 && creditCard.charAt(0) == "4") {
  console.log("\nVisa.");
} else if (length == 16 && creditCard.charAt(0) == "5" && (creditCard.charAt(1) == "1") || creditCard.charAt(1) == "2" || creditCard.charAt(1) == "3" || creditCard.charAt(1) == "4" || creditCard.charAt(1) == "5"){
  console.log("\nMastercard.");
} else {
  console.log("\nInvalid.");
}
} else {
  console.log("\nInvalid.");
}
