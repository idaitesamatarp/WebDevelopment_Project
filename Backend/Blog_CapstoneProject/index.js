import express from "express";
import bodyParser from "body-parser";
import { post } from "./post.js";
import methodOverride from "method-override";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get("/", post.list);
app.get("/post/:month/create", post.create);
app.post("/post/:month/store", post.store);
app.get("/post/:month", post.view);
app.get("/post/:month/view/:id", post.view);
app.get('/post/:month/edit/:id', post.edit);
app.post('/post/:month/update/:id', post.update);
app.delete('/post/:month/delete/:id', post.deletes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
