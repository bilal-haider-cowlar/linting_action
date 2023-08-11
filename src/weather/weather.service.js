const writeClient = require('../../config/influxdb').getWriteClient()
const queryClient = require('../../config/influxdb').getQueryClient()
const { Point } = require('@influxdata/influxdb-client')
const getWeatherData = async () => {
  try {
    const fluxQuery1 = `
      from(bucket: "weather")
        |> range(start: -1y)
        |> filter(fn: (r) => r._measurement == "measurement1")
        |> last()
        |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
    `

    const queryResult = await queryClient.collectRows(fluxQuery1)
    // console.log(queryResult[0].humidity)
    // console.log(queryResult[0].temp)
    if (
      !(
        queryResult[0].humidity !== undefined &&
        queryResult[0].temp !== undefined
      )
    ) {
      return { success: false, message: 'Data not found from influxdb' }
    }
    return {
      success: true,
      temp: queryResult[0].temp,
      humidity: queryResult[0].humidity,
    }
  } catch (e) {
    return { success: false, error: e }
  }
}

const Write_Data = (humidity, temperature) => {
  let point = new Point('measurement1')
    .tag('city', 'islamabad')
    .floatField('humidity', humidity)
    .floatField('temp', temperature)
  writeClient.writePoint(point)
  writeClient.flush()
}

exports.getWeatherData = getWeatherData
exports.Write_Data = Write_Data
