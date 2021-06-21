const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

mongoose.connect("mongodb://localhost/newsapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  News: require("./news"),
};
