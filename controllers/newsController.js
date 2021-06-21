const db = require("../models");

exports.getNews = (req, res) => {
  db.News.find().then((news) => res.status(200).json(news));
};
