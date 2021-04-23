const fs = require("fs");

const lsCat = () => {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    const input = data.toString().trim().split(" ");

    if (input[0] === "cat") {
      let data = fs.readFileSync(input[1]);

      process.stdout.write(data);
      process.stdout.write("prompt > ");
    }

    process.stdout.write("\nprompt > ");
  });
};

module.exports = lsCat;
