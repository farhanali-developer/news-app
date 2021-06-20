const express = require('express')
const path = require('path')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use('/', require('./routes/index'))
app.listen(5000, () => {
  console.log('Server is running on 5000')
})
