const db = require("../models");

exports.getLogin = (req, res) => {
  db.User.find().then((user) => res.status(200).json(user));
};
