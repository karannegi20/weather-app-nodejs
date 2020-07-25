const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=8809026b4db7bf1b5cc09ac3ed8fce00&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
  //   console.log(response.body.current);

  if (error) {
    console.log('Unable to connec to internet service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(
      'It is ' +
        response.body.current.temperature +
        '. It feels like ' +
        response.body.current.feelslike
    );
  }
});

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FyYW5uZWdpMjAiLCJhIjoiY2tkMXh0ZWkxMHp0YTJ4cXZrMDBvbjFzMCJ9.7l1a1iNSvVpXDG98mQhr9A';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Cannot connect to internet service!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location.');
  } else {
    const lat = response.body.features[0].center[1];
    const long = response.body.features[0].center[0];

    console.log(lat, long);
  }
});
