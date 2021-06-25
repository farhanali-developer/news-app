const db = require("../models");

exports.createUser = (req, res) => {
  db.User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        db.User.create({ ...req.body }).then((user) =>
          res.status(200).json(user)
        );
        res.send({ title: "Sign Up", message: "Sign Up Successful" });
      } else {
        console.log("User Already Exists");
        //res.render({ title: "Sign Up", message: "Username already existed!" });
      }
    })
    .catch("Error Creating User");
};
