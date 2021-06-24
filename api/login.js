const router = require("express").Router();
const Controller = require("../controllers");

router.post("/login", Controller.Login.getLogin);

module.exports = router;
