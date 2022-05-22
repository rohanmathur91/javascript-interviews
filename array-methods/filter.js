Array.prototype.myFilter = function (callback) {
  const array = this;

  // check for method called on array or not
  if (!Array.isArray(array)) {
    throw new Error("myFilter is not a function");
  }

  // check if callback provided
  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  const output = [];
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i], i, array);
    if (result) {
      output.push(array[i]);
    }
  }

  return output;
};
