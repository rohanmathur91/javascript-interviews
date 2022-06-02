// Execute promise / asynchronous operations in series

function asyncTask(time, isReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isReject) {
        reject(`rejected ${time}`);
      } else {
        resolve(`resolved ${time}`);
      }
    }, 1000 * time);
  });
}

// approach - 1
function promiseInSeries1(i = 0, promises) {
  if (i >= promises.length) {
    return;
  }

  promises[i]
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => promiseInSeries1(i + 1, promises));
}

promiseInSeries1(0, [
  asyncTask(3),
  asyncTask(0, true),
  asyncTask(1),
  asyncTask(5, true),
  asyncTask(2),
]);

// approach - 2
async function promiseInSeries2(promises) {
  if (promises.length === 0) {
    return;
  }

  for (let i = 0; i < promises.length; i++) {
    try {
      const result = await promises[i];
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}

// promiseInSeries2([
//   asyncTask(3),
//   asyncTask(1, true),
//   asyncTask(5),
//   asyncTask(2),
// ]);
