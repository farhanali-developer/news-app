const db = require('./models')

exports.getNews = (res, req) => {
  db.news.find().then((news) => res.status(200).json(news))
}
