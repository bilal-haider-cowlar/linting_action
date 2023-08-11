const mqtt = require('mqtt')
const { variables } = require('./config')
const { Write_Data } = require('../src/weather/weather.service')
const client = mqtt.connect(
  `${variables.mqtt_host + variables.mqtt_mqtt_port + variables.mqtt_path}`
)
const getClient = () => {
  return client
}

const onConnectionMessage = async (topic, message) => {
  if (topic === 'bilal') {
    console.log('message arrived')
    const data = JSON.parse(message.toString())
    if (data.humidity !== undefined && data.temp !== undefined) {
      try {
        Write_Data(data.humidity, data.temp)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

const onConnectionConnect = async () => {
  client.subscribe('bilal', function (err) {
    if (!err) {
      console.log('connected mqtt')
    } else {
      console.log('error : ' + err)
    }
  })
}

const onConnectionDisconnect = async () => {
  console.log('MQTT client disconnected')
}
const onConnectionReconnect = async () => {
  console.log('MQTT client Reconnecting')
}
const onConnectionClose = async () => {
  console.log('MQTT client Closed')
}

client.on('connect', onConnectionConnect)
client.on('message', onConnectionMessage)
client.on('reconnect', onConnectionReconnect)
client.on('disconnect', onConnectionDisconnect)
client.on('close', onConnectionClose)

module.exports.getClient = getClient
