const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('cailed failed');
      }
    }, 1500);
  });
};

asyncAdd(2, 3).then((resolveMsg) => {
  console.log(resolveMsg);
  return asyncAdd(resolveMsg, 5);
}).then((resolveMsg) => {
  console.log(resolveMsg);
}).catch((errorMsg) => {
  console.log(errorMsg);
});

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey. It worked!');
//     reject('failed to promise');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMsg) => {
//   console.log('Failed: ', errorMsg);
// });
