const request = require('request');


const geocodeAddress = (address) => {
  request(address, (error, response, body) => {
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
};


module.exports = {
  geocodeAddress,
};
