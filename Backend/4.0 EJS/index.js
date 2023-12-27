import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var thisDate = new Date();
  var dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var today = thisDate.getDay();

  res.render("index.ejs", {
    date: dayOfWeek[today],
    advice: "it's time to work hard!",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
