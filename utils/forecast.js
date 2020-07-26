const request = require('request');

const forecast = (lat, long, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=8809026b4db7bf1b5cc09ac3ed8fce00&query=' +
    encodeURIComponent(lat) +
    ',' +
    encodeURIComponent(long);

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        'It is ' +
          response.body.current.temperature +
          '. It feels like ' +
          response.body.current.feelslike
      );
    }
  });
};

module.exports = forecast;
