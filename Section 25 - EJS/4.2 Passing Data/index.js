import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let countfName = req.body["fName"].length;
  let countlName = req.body["lName"].length;
  let count = countfName + countlName;

  res.render("index.ejs", { character: count });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
