Promise.racePolyfill = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      if (promise?.then) {
        promise
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve(promise);
      }
    });
  });
};
