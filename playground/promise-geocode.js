const request = require('request');


const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const requestAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const apiKey = 'AIzaSyA3yvCGw-0zxBEJhqb8hssihn72rFfi90E';
    const reqStr = `${requestAPI}${address}&key=${apiKey}`;
    request(reqStr, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        const obj = JSON.parse(body);
        resolve(obj);
      }
    });
  });
};

geocodeAddress('abcdefghijklmnopqrstuvwsy').then((obj) => {
  console.log(obj.results[0].formatted_address);
  console.log(obj.results[0].geometry.location.lat);
  console.log(obj.results[0].geometry.location.lng);
}).catch((errorMsg) => {
  console.log(errorMsg);
});
