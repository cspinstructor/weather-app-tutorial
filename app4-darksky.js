const yargs = require('yargs');
const geocode = require('./geocode/geocode4-darksky');

const argv = yargs
  .options('address')
  .help()
  .argv;

const reqStr = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyA3yvCGw-0zxBEJhqb8hssihn72rFfi90E`;

let latitude;
let longitude;

geocode.geocodeAddress(reqStr, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    latitude = results.latitude;
    longitude = results.longitude;
    console.log(latitude, longitude);
    geocode.getWeather(latitude, longitude);
  }
});

// a8657815b96e87afa1e337d1fb2329d8
