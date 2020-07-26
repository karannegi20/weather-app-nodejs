const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1Ijoia2FyYW5uZWdpMjAiLCJhIjoiY2tkMXh0ZWkxMHp0YTJ4cXZrMDBvbjFzMCJ9.7l1a1iNSvVpXDG98mQhr9A';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, {
        lat: response.body.features[0].center[1],
        long: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
