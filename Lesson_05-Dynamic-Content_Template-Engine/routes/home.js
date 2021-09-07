const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const userData = require("./user");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(userData.users);
  res.sendFile(path.join(rootDir, "views", "Home.html"));
});

module.exports = router;
