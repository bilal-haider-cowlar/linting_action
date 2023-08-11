const router = require('express').Router()
const weatherController = require('./weather.controller')

router.get('/weatherdata', weatherController.getWeatherData)
module.exports = router
