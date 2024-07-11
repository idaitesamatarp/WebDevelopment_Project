import express from "express";
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("<h1>Hello Express!</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Phone: +62 85643******</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>I'm Fullstack Developer yeahh!!!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}.`);
});
