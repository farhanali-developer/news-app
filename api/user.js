const router = require("express").Router();
const Controller = require("../controllers");

// router.post("/user", Controller.User.getUser);
router.post("/signup", Controller.User.createUser);

router.post("/login", Controller.User.checkUser);

// router.post("/", function (req, res) {
//   Controller.User.getUser(req.body)
//     .then(function (data) {
//       console.log("This worked");
//       //res.status(data.status).send({ message: data });
//     })
//     .catch(function (err) {
//       res.status(data.status).send({ message: err.message });
//     });
// });

module.exports = router;
