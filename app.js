const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('New Delhi', (error, data) => {
  if (error) {
    return console.log(error);
  }

  console.log('Error', error);
  console.log('Data', data);
  forecast(data.lat, data.long, (error, data) => {
    if (error) return console.log(error);

    console.log('Error', error);
    console.log('Data', data);
  });
});
