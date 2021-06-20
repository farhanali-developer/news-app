var express = require("express");
var router = express.Router();
const db = require("../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  db.news.find().then((news) => {
    res.render("index", {
      News: news,
    });
  });
});

module.exports = router;
