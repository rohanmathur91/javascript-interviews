Array.prototype.myMap = function (callback) {
  const array = this;

  if (!Array.isArray(array)) {
    throw new Error("myMap is not a function");
  }

  if (typeof callback !== "function") {
    throw new Error(`${callback} is not a function`);
  }

  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i], i, array));
  }

  return output;
};
