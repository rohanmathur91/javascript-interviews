function fakeFetch(message, isReject) {
  return new Promise((resolve, reject) => {
    if (isReject) {
      reject("Promise was rejected by user");
      return;
    }
    setTimeout(() => resolve(message), 2000);
  });
}

Promise.myAllSettled = function (arrayOfPromise) {
  return new Promise((resolve, reject) => {
    let output = [];
    arrayOfPromise.forEach((eachPromise) => {
      eachPromise
        .then((value) => {
          output.push({
            status: "fulfilled",
            value,
          });
        })
        .catch((reason) => {
          output.push({
            status: "rejected",
            reason,
          });
        })
        .finally(() => {
          if (output.length === arrayOfPromise.length) {
            resolve(output);
          }
        });
    });
  });
};

const result1 = Promise.myAllSettled([
  fakeFetch("promise 1"),
  fakeFetch("promise 2"),
  fakeFetch("promise 3"),
  fakeFetch("promise 4", true),
]);

result1.then((res) => console.log(res)).catch((err) => console.log(err));
