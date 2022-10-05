function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(`------ response received from ${url} -----`),
      2000
    );
  });
}

//-------------- async & await implementation --------------

function doWhenDataReceived(data) {
  // taking the data when promise is resolved and again going back
  // into the execution context of the createFlow with that data
  returnNextElement.next(data);
}

function* createFlow() {
  const response = yield fakeFetch("https://implementation.com");
  console.log(response);
}

const returnNextElement = createFlow(); // returns generator object
const futureData = returnNextElement.next();
futureData.value.then(doWhenDataReceived);

//-------------- with async & await --------------
async function getData() {
  const response = await fakeFetch("https://original.com");
  console.log(response);
}

getData();
