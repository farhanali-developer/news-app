const router = require('express').Router()
const Controller = require('../controllers')

router.get('/', Controller.news.getNews)

module.exports = router
