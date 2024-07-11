//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var isAuth = false;

app.use(bodyParser.urlencoded({ extended: false }));

function passwordChecker(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    isAuth = true;
  }
  next();
}
app.use(passwordChecker);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAuth) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    // res.sendFile(__dirname + "/public/index.html");
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
