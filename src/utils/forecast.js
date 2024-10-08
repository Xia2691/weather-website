const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f0424fdcf0ff9ebf77db275145df0ac6&query='+latitude+","+longitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. But feel like ' + body.current.feelslike + " degress and the humidity is " + body.current.humidity )
        }
    })
}

module.exports = forecast