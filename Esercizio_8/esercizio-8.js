const fs = require("fs");

fs.writeFile("helloWorld.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("Hello World!");
});
