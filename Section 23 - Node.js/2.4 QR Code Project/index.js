/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    type: "text",
    name: "url",
    message: "What's your url?",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    var qr_png = qr.image(answers.url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("URL.png"));

    fs.writeFile("URL.txt", answers.url, (err) => {
      if (err) throw err;
      console.log("Success to created file.");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Question not found!");
    } else {
      console.log("error", error);
    }
  });
