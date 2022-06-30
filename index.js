const fs = require("fs");
const path = require("path");

fs.mkdir(path.join("./Project", "test"), (err) => {
  if (err) {
    return console.error(err);
  }
  fs.writeFile("./Project/test/newFile.txt", "it works", (err) => {
    if (err) {
      return console.error(err);
    }
    if (
      fs.access("./Project/test/newFile.txt", (err) => {
        if (err) {
          return console.error(err);
        }
      })
    ) {
      return console.log("you made it inside a file");
    }
  });
});
