// const http = require("http");

const express = require("express");

const app = express();


app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h2>Add Product</h2>");
});

app.use("/", (req, res, next) => {
  console.log("In the another middleware");
  res.send("<h1>Hello from Express</h1>");
});
// const server = http.createServer(app);

// server.listen(5050);
app.listen(5050);
