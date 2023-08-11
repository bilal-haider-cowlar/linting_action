const { InfluxDB } = require('@influxdata/influxdb-client')
const variables = require('../config/config').variables

const token = variables.influx_token
const url = variables.influx_url
const client = new InfluxDB({ url, token })
const org = variables.influx_org
const bucket = variables.influx_bucket

const queryClient = client.getQueryApi(org)
const getQueryClient = () => {
  console.log('getQueryClient: ', 'Started')
  return queryClient
}

const writeClient = client.getWriteApi(org, bucket, 'ns')
const getWriteClient = () => {
  return writeClient
}

module.exports.getQueryClient = getQueryClient
module.exports.getWriteClient = getWriteClient
