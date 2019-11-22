const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

process.stdout.write("\n");

while (Number.isNaN(height) || height < MIN || height > MAX || !Number.isInteger(height)) {
  var height = Number(readlineSync.question("Height: "));
}

for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= i; j++) {
      row += '#';
    }

    console.log(row);
  }
