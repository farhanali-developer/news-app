const router = require("express").Router();
const Controller = require("../controllers");

router.get("/news", Controller.News.getNews);

module.exports = router;
