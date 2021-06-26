const db = require("../models");

exports.createUser = (req, res) => {
  db.User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        db.User.create({ ...req.body }).then((user) =>
          res.status(200).json(user)
        );
      } else {
        console.log("User Already Exists");
      }
    })
    .catch("Error Creating User");
};

exports.checkUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.login(username, password);
  if (user) {
    return true;
  } else {
    return false;
  }
};
