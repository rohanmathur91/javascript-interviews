function memoize(func) {
  const cache = {};
  return function () {
    const stringifyArgs = JSON.stringify(arguments);
    if (cache[stringifyArgs]) {
      return cache[stringifyArgs];
    }
    cache[stringifyArgs] = func.apply(this, arguments);

    return cache[stringifyArgs];
  };
}
