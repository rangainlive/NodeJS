const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");

app.use(homeRouter);
app.use("/admin", userRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(4004);
