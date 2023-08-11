/* eslint-disable */
const dotenv = require('dotenv').config()
const variables={
  dev: {
    mongo_host: process.env.MONGO_HOST,
    mongo_port: process.env.MONGO_PORT, 
    mongo_collection: process.env.MONGO_COLLECTION,
    port: process.env.PORT,
    influx_token: process.env.INFLUX_TOKEN,
    influx_url: process.env.INFLUX_URL,
    influx_org: process.env.INFLUX_ORG,
    influx_port: process.env.INFLUX_PORT,
    influx_bucket: process.env.INFLUX_BUCKET,
    mqtt_ws_port: process.env.VERNE_WS_PORT,
    mqtt_mqtt_port: process.env.VERNE_MQTT_PORT,
    mqtt_admin_port: process.env.VERNE_ADMIN_PORT,
    mqtt_host: process.env.MQTT_HOST,
    mqtt_path: process.env.MQTT_PATH,
  },
  test: {
    mongo_host: process.env.MONGO_HOST,
    mongo_port: process.env.MONGO_PORT, 
    mongo_collection: process.env.MONGO_COLLECTION,
    port: process.env.PORT,
    influx_token: process.env.INFLUX_TOKEN,
    influx_url: process.env.INFLUX_URL,
    influx_org: process.env.INFLUX_ORG,
    influx_port: process.env.INFLUX_PORT,
    influx_bucket: process.env.INFLUX_BUCKET,
    mqtt_ws_port: process.env.VERNE_WS_PORT,
    mqtt_mqtt_port: process.env.VERNE_MQTT_PORT,
    mqtt_admin_port: process.env.VERNE_ADMIN_PORT,
    mqtt_host: process.env.MQTT_HOST,
    mqtt_path: process.env.MQTT_PATH,
  },
  prod: {
    mongo_host: process.env.MONGO_HOST,
    mongo_port: process.env.MONGO_PORT, 
    mongo_collection: process.env.MONGO_COLLECTION,
    port: process.env.PORT,
    influx_token: process.env.INFLUX_TOKEN,
    influx_url: process.env.INFLUX_URL,
    influx_org: process.env.INFLUX_ORG,
    influx_port: process.env.INFLUX_PORT,
    influx_bucket: process.env.INFLUX_BUCKET,
    mqtt_ws_port: process.env.VERNE_WS_PORT,
    mqtt_mqtt_port: process.env.VERNE_MQTT_PORT,
    mqtt_admin_port: process.env.VERNE_ADMIN_PORT,
    mqtt_host: process.env.MQTT_HOST,
    mqtt_path: process.env.MQTT_PATH,
  },
}
const environment =process.env.NODE_ENV
if(environment === 'development'){
  module.exports.variables=variables.dev
}
else if(environment === 'testing'){
  module.exports.variables=variables.test
}
else if(environment === 'production'){
  module.exports.variables=variables.prod
}
else{
  console.log("No environment specified in .env file. Please set environment")
  process.exit(1)
}


