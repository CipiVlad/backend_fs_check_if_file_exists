const fs = require("fs");
const path = require("path");

function textToFile(text) {
  return text;
}

fs.mkdir(path.join("./Project", "test"), (err) => {
  if (err) {
    return console.error(err);
  }
  fs.writeFile("./Project/test/newFile.txt", "it works", (err) => {
    if (err) {
      return console.error(err);
    }

    fs.access("./Project/test/newFile.txt", (err) => {
      if (err) {
        return console.error(err);
      }
      fs.writeFileSync(
        "./Project/test/newFile.txt",
        textToFile("text added to File and overwritten previous text"),
        (err) => {
          if (err) {
            return err;
          }
        }
      );
    });
  });
});
