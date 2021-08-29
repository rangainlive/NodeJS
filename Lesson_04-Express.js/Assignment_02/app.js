const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("Express User list page");
  res.send("<ul><li>User 1</li><li>User 2</li><li>User 3</li></ul>");
});
app.use("/", (req, res, next) => {
  console.log("Express Home page");
  res.send("<h2>Express Assignment Home Page</h2>");
});

app.listen(5051);
