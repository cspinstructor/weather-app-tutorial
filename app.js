const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options('address')
  .help()
  .argv;

const reqStr = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyA3yvCGw-0zxBEJhqb8hssihn72rFfi90E`;

request(reqStr, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const obj = JSON.parse(body);
    if (obj.status === 'OK') {
      console.log(`Address: ${obj.results[0].formatted_address}`);
      console.log(`Lat: ${obj.results[0].geometry.location.lat}`);
    } else {
      console.log(obj.status);
    }
  }
});
