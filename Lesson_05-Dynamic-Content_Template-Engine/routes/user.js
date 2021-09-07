const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "Users.html"));
});

router.get("/about", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "About.html"));
});

router.post("/add-user", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
