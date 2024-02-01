//Problem 1: File Reader
//Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and
// reads its content asynchronously using the fs module. The function should print the content to the console.

const fs = require("fs");

function readFileContent(filePath) {
  try {
    const data = fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log(`File Content: ${data}`);
    });
  } catch (err) {
    console.log(err);
  }
}
readFileContent("file1.txt");
readFileContent("empty-file.txt");
readFileContent("nonexistent-file.txt");
