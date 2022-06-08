Promise.myAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const result = [];
    let resolvedPromiseCount = 0;

    for (let i = 0; i < promiseArray.length; i++) {
      if (promiseArray[i]?.then) {
        promiseArray[i]
          .then((data) => {
            result[i] = data;
            resolvedPromiseCount++;

            if (resolvedPromiseCount === promiseArray.length) {
              resolve(result);
            }
          })
          .catch((error) => reject(error));
      } else {
        result[i] = promiseArray[i];
        resolvedPromiseCount++;

        if (resolvedPromiseCount === promiseArray.length) {
          resolve(result);
        }
      }
    }
  });
};
