const express = require('express')
const cors = require('cors')
const app = express()
const UserRouter = require('./src/user/user.routes')
const WeatherRouter = require('./src/weather/weather.routes')
const variables = require('./config/config').variables
const connectDB = require('./config/mongodb')
const { getClient } = require('./config/mqtt')

app.use(express.json());
app.use(cors())
app.use(UserRouter)
app.use(WeatherRouter)

getClient()
// i am commiting this code
connectDB()
  .then(() => {console.log('App started on port')
  app.listen(variables.port)}).catch((e) => {console.log(e)
    console.log('error in connecting db app not started')
  })

module.exports = app
