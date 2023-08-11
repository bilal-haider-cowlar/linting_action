const influx_service = require('./weather.service')
const jwt = require('jsonwebtoken')
const getWeatherData = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'weather', (err) => {
      if (err) {
        return res.json({ success: false, message: 'Invalid Token' })
      }
    })
    const response = await influx_service.getWeatherData()
    return res.send(response)
  } catch (e) {
    console.log(e)
  }
}
exports.getWeatherData = getWeatherData
