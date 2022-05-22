Function.prototype.myBind = function (thisArg, ...args) {
  let methodOnWhichBindIsCalled = this;
  return function (...funcArgs) {
    return methodOnWhichBindIsCalled.call(thisArg, ...args, ...funcArgs);
  };
};
