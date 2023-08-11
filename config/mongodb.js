const mongoose = require('mongoose')
const {variables} = require('./config')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${variables.mongo_host}:${variables.mongo_port}/${variables.mongo_collection}`
    )
    // await mongoose.connect(`mongodb://localhost:27017/weather`);
    // await mongoose.connect(`mongodb://mongodb:27017/weather`);
    console.log('MongoDB connected...')
  } catch (error) {
    console.error('Could not connect to MongoDB...', error)
    // eslint-disable-next-line
    process.exit(1)
  }
}
module.exports = connectDB
