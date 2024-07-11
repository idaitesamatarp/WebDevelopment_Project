import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: false }));

function bandNameGenerator(req, res, next) {
  bandName = req.body.street + req.body.pet;
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const element = `<div><h2>Your band name is: </h2><h3>${bandName}😸</h3></div>`;
  res.send(element);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
