const yargs = require('yargs');
const geocode = require('./geocode/geocode2');

const argv = yargs
  .options('address')
  .help()
  .argv;

const reqStr = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyA3yvCGw-0zxBEJhqb8hssihn72rFfi90E`;


geocode.geocodeAddress(reqStr);
