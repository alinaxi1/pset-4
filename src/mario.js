const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

process.stdout.write("\n");

while (Number.isNaN(height) || height < MIN || height > MAX || !Number.isInteger(height)) {
  var height = Number(readlineSync.question("Height: "));
}

process.stdout.write("\n");

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }

    for (var k = 1; k <= i; k++) {
      row += '#';
    }
    console.log(row + "#");
}
