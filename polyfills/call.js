Function.prototype.myCall = function (thisArg, ...args) {
  thisArg["random"] = this;
  const result = thisArg["random"](...args);
  delete thisArg["random"];
  return result;
};
