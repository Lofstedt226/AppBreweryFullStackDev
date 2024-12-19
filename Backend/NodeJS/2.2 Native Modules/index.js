// Refer back to https://nodejs.org/docs/latest/api/ Documentation

const fs = require("fs");

// fs.writeFile("message.txt", "Hello from Node.js", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// })


fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 