/* eslint-disable */

const request = require('supertest')
const app = require('../index')
const mqtt = require('mqtt')

const brokerUrl = 'ws://broker.emqx.io:8083/mqtt'
const topic = 'bilal'

const client = mqtt.connect(brokerUrl)

describe('Signup Route', () => {
  it('should create a new user and return a success message', async () => {
    const response = await request(app).post('/signup').send({
      email: 'john@example.com',
      password: '123123',
    })
    expect(response.body.success).toBe(true)
  })

  it('Try to again SignUp with same email gives error', async () => {
    const response = await request(app).post('/signup').send({
      email: 'john@example.com',
      password: '123123',
    })
    expect(response.body.success).toBe(false)
  })
})

describe('Login Route', () => {
  it('login with wrong credentials gives error', async () => {
    const response = await request(app).post('/login').send({
      email: 'john@example.com',
      password: '000000',
    })
    expect(response.body.success).toBe(false)
  })

  it('Login with right credentials gives successful login', async () => {
    const response = await request(app).post('/login').send({
      email: 'john@example.com',
      password: '123123',
    })
    expect(response.body.success).toBe(true)
  })
})
describe('mqtt weather Route', () => {
  it('Publishes message to mqtt and then checks data that is return from weather route', async () => {
    const message = JSON.stringify({ humidity: 30.0, temp: 10.0 })
    client.on('connect', () => {
      client.publish(topic, message, (err) => {
        if (err) {
          console.error('Error publishing message:', err)
        } else {
          // console.log('Message published successfully');
        }
        client.end()
      })
    })
    setTimeout(async () => {
      const response = await request(app).get('/weatherdata')
      expect(response.body.humidity).toBe(30)
      expect(response.body.temp).toBe(10)
    }, 2000)
  })
})
