const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");

const router = express.Router();

// / Home page => GET
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
