Array.prototype.myReduce = function (reducerCallback, initialValue) {
  const array = this; // array onto which myReduce is called

  if (!Array.isArray(array)) {
    throw new Error("myReduce is not a function");
  }

  if (typeof reducerCallback !== "function") {
    throw new Error(`${reducerCallback} is not a function`);
  }

  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (accumulator === undefined) {
      accumulator = array[i];
    } else {
      accumulator = reducerCallback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};
