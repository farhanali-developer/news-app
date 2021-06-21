const router = require("express").Router();
const Controller = require("../controllers");

router.get("/", Controller.News.getNews);

module.exports = router;
