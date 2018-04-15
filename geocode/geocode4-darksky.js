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

const getWeather = (latitude, longitude) => {
  const reqApi = 'https://api.darksky.net/forecast';
  const apiKey = 'a8657815b96e87afa1e337d1fb2329d8';
  const reqStr = `${reqApi}/${apiKey}/${latitude},${longitude}`;
  console.log(reqStr);
  request(reqStr, (error, response, body) => {
    const weatherObj = JSON.parse(body);
    console.log(weatherObj.currently.summary);
    // console.log(response.statusCode);
  });
};

module.exports = {
  geocodeAddress,
  getWeather,
};
