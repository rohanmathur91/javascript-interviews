Function.prototype.myCall = function (thisArg, ...args) {
  const key = Symbol();
  thisArg[key] = this;
  const result = thisArg[key](...args);
  delete thisArg[key];
  return result;
};
