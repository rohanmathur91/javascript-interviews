function throttle(func, limit) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      func.apply(this, arguments);
      setTimeout(() => (flag = true), limit);
    }
  };
}
