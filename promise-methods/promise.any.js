Promise.anyPolyfill = function (promisesArray) {
  return new Promise((resolve, reject) => {
    let rejectedPromiseCount = 0;

    promisesArray.forEach((promise) => {
      if (promise?.then) {
        promise
          .then((data) => resolve(data))
          .catch((error) => {
            rejectedPromiseCount++;
            if (rejectedPromiseCount === promisesArray.length) {
              reject(new AggregateError("All promises were rejected"));
            }
          });
      } else {
        resolve(promise);
      }
    });
  });
};
