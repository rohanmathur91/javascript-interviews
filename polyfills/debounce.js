function debounce(func, delay) {
  let timerId;
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => func.apply(this, arguments), delay);
  };
}
