const mongoose = require("mongoose");
const newsSchema = mongoose.Schema({
  // source: {
  //   id: null,
  //   name: String,
  // },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});
module.exports = mongoose.model("News", newsSchema);
