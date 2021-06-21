const db = require("../models");

exports.getNews = (res, req) => {
  db.News.find().then(async (news) => await res.status(200).json(news));
};
