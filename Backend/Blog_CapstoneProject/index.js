import express from "express";
import bodyParser from "body-parser";
import { post } from "./post.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", post.list);
app.get("/post/create/:month", post.create);
app.post("/post/store/:month", post.store);
app.get("/post/:month", post.view);
app.get("/post/:month/view/:id", post.view);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
