const yargs = require('yargs');
const geocode = require('./geocode/geocode3');

const argv = yargs
  .options('address')
  .help()
  .argv;

const reqStr = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyA3yvCGw-0zxBEJhqb8hssihn72rFfi90E`;

geocode.geocodeAddress(reqStr, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    console.log(results.latitude);
    console.log(results.longitude);
  }
});
