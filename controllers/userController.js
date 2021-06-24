const db = require("../models");

exports.createUser = (req, res) => {
  db.User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        db.User.create({ ...req.body }).then((user) => {
          res.status(200).json(user);
          res.render({
            message: "Sign Up Sucessfully.",
          });
        });
      } else {
        console.log("User Already Exists");
      }
    })
    .catch("Error Creating User");
};
