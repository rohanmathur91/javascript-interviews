function deepCopyOfObject(object) {
  const newObject = {};

  for (let [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      // recursively call the function for nested objects
      newObject[key] = deepCopyOfObject(value);
    } else {
      newObject[key] = value;
    }
  }
  return newObject;
}
