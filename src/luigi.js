const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 24;

process.stdout.write("\n");

while (Number.isNaN(height) || height < MIN || height > MAX || !Number.isInteger(height)) {
  var height = Number(readlineSync.question("Height: "));
}

process.stdout.write("\n");
var counter = 1;

for (var row = 0; row < height; row++) {
  for (var spaces = height - counter; spaces > 0; spaces--) {
      process.stdout.write(" ");
  }
  for (var hashes = 0; hashes <= counter; hashes++) {
      process.stdout.write("#");
  }

  process.stdout.write("  ");

  for (var hashes = 0; hashes <= counter; hashes++) {
      process.stdout.write("#");
  }

  process.stdout.write("\n");
  counter++;
}
