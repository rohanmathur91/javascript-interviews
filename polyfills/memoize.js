function memoize(func) {
  const cache = {};
  return function () {
    const stringifyArgs = JSON.stringify(arguments);

    if (!(stringifyArgs in cache)) {
      cache[stringifyArgs] = func.apply(this, arguments);
    }

    return cache[stringifyArgs];
  };
}
