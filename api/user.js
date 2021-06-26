const router = require("express").Router();
const Controller = require("../controllers");

router.get("/news", Controller.News.getNews);
router.post("/signup", Controller.User.createUser);
router.post("/login", Controller.User.checkUser);

module.exports = router;
