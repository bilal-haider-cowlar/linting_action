const mqtt = require('mqtt')

const brokerUrl = 'ws://broker.emqx.io:8083/mqtt'
const topic = 'bilal'
const message = JSON.stringify({ humidity: 40.0, temp: 10.0 })

const client = mqtt.connect(brokerUrl)

client.on('connect', () => {
  client.publish(topic, message, (err) => {
    if (err) {
      console.error('Error publishing message:', err)
    } else {
      console.log('NO error')
    }
    client.end()
  })
})
