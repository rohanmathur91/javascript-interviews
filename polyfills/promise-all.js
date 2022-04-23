function fakeFetch(message, isReject) {
  return new Promise((resolve, reject) => {
    if (isReject) {
      reject("Promise was rejected by user");
      return;
    }
    setTimeout(() => resolve(message), 2000);
  });
}

// const result = Promise.all([
//   fakeFetch("promise 1"),
//   fakeFetch("promise 2"),
//   fakeFetch("promise 3"),
// ]);

// // result.then((res) => console.log(res));

Promise.myAll = function (arrayOfPromise) {
  return new Promise((resolve, reject) => {
    let output = [];
    arrayOfPromise.forEach((eachPromise) => {
      eachPromise
        .then((response) => {
          output.push(response);
          if (output.length === arrayOfPromise.length) {
            resolve(output);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

const result1 = Promise.myAll([
  fakeFetch("promise 1"),
  fakeFetch("promise 2"),
  fakeFetch("promise 3"),
  fakeFetch("promise 4", true),
]);

result1.then((res) => console.log(res)).catch((err) => console.log(err));
