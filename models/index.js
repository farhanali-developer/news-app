const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://dbUser:Icsm1458319@cluster0.mplx4.mongodb.net/news-app?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

module.exports = {
  News: require('./news'),
}
