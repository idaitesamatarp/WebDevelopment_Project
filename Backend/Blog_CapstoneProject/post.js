const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
const thisMonth = month[d.getMonth()];

const summary = (arr) =>
  arr.reduce((a, v) => {
    a[v.month] = (a[v.month] ?? 0) + 1;
    return a;
  }, {});

const posts = [
  {
    month: "January",
    title: "My First Cat",
    subtitle: "Post on January 1, 2024",
    content:
      "Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves shake treat ,  intently sniff hand  flop over intently stare at the same spot why must they do that chase mice bag stretch  intrigued by the shower sweet beast under the bed, leave dead animals as gifts swat at dog  rub face on everything make muffins lick butt why must they do that hide when guests come over. Hunt anything that moves behind the couch  rub face on everything lick butt  intrigued by the shower swat at dog give attitude intently stare at the same spot flop over chase mice, why must they do that bag stretch hopped up on goofballs attack feet make muffins  intently sniff hand  destroy couch hide when guests come over leave dead animals as gifts shake treat , flop over sweet beast under the bed chase mice  intrigued by the shower  rub face on everything hopped up on goofballs why must they do that  intently sniff hand.",
  },
  {
    month: "January",
    title: "My First Dog",
    subtitle: "Post on February 1, 2024",
    content:
      "Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves shake treat ,  intently sniff hand  flop over intently stare at the same spot why must they do that chase mice bag stretch  intrigued by the shower sweet beast under the bed, leave dead animals as gifts swat at dog  rub face on everything make muffins lick butt why must they do that hide when guests come over. Hunt anything that moves behind the couch  rub face on everything lick butt  intrigued by the shower swat at dog give attitude intently stare at the same spot flop over chase mice, why must they do that bag stretch hopped up on goofballs attack feet make muffins  intently sniff hand  destroy couch hide when guests come over leave dead animals as gifts shake treat.",
  },
];

const filterData = posts.filter((item) => item.month == thisMonth);

const list = (req, res) => {
  res.render("index.ejs", {
    month,
    postsMonth: thisMonth,
    data: filterData,
    count: summary(posts),
  });
};

const create = (req, res) => {
  const months = req.params.month ? req.params.month : thisMonth;
  res.render("create.ejs", {
    month,
    postsMonth: months,
    data: filterData,
    count: summary(posts),
  });
};

const store = (req, res) => {
  const request = req.body;
  const months = req.params.month ? req.params.month : thisMonth;
  Object.assign(request, {
    month: months,
  });
  posts.push(request);
  res.redirect("/post/" + months);
};

const edit = (req, res) => {
  const thisMonth = req.params.month;
  const id = req.params.id;

  const filterData = posts.filter(
    (item, index) => item.month == thisMonth && index == id
  );

  res.render("edit.ejs", {
    month,
    postsMonth: thisMonth,
    data: filterData,
    count: summary(posts),
    id,
  });
};

const update = (req, res) => {
  var post = posts[req.body.id];
  post.title = req.body.title;
  post.subtitle = req.body.subtitle;
  post.content = req.body.content;
  res.redirect("/post/" + req.params.month);
};

const view = (req, res) => {
  const thisMonth = req.params.month;
  const id = req.params.id;
  const activePath = req.path.split("/")[3];

  const filterData = id
    ? posts.filter((item, index) => item.month == thisMonth && index == id)
    : posts.filter((item) => item.month == thisMonth);

  res.render("view.ejs", {
    month,
    postsMonth: thisMonth,
    data: filterData,
    count: summary(posts),
    activePath,
  });
};

const deletes = (req, res) => {
  const id = req.params.id;
  const postToDelete = posts.find((item, index) => index == id);

  const index = posts.indexOf(postToDelete);
  if (index > -1) {
    posts.splice(index, 1);
  }
  res.redirect("/post/" + req.params.month);
};

const post = {
  list,
  create,
  store,
  view,
  edit,
  update,
  deletes,
};

export { post };
