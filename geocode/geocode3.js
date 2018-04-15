const request = require('request');


const geocodeAddress = (address, callback) => {
  request(address, (error, response, body) => {
    if (error) {
      callback(error, undefined);
    } else {
      const obj = JSON.parse(body);
      if (obj.status === 'OK') {
        callback(undefined, {
          address: obj.results[0].formatted_address,
          latitude: obj.results[0].geometry.location.lat,
          longitude: obj.results[0].geometry.location.lng,
        });
      } else {
        callback(obj.status, undefined);
      }
    }
  });
};


module.exports = {
  geocodeAddress,
};
