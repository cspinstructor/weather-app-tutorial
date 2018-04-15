const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options('address')
  .help()
  .argv;

const reqStr = `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyA3yvCGw-0zxBEJhqb8hssihn72rFfi90E`;
const darkSkyApi = 'https://api.darksky.net/forecast/a8657815b96e87afa1e337d1fb2329d8/';

axios.get(reqStr)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('unable to find that address');
    }
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    return axios.get(`${darkSkyApi}${lat},${lng}`);
  }).then((response) => {
    console.log(response.data.currently.summary);
  })
  .catch((error) => {
    console.log(error);
  });
