function createIterator(array) {
  let i = 0;
  function inner() {
    const result = array[i];
    i++;
    return result;
  }
  return inner;
}

const returnNextElement = createIterator([1, 2, 3, 4]);
// console.log(returnNextElement()); // 1
// console.log(returnNextElement()); // 2
// console.log(returnNextElement()); // 3

//  builtin iterators returns an object in which there "next" method
function createFlow(array) {
  let i = 0;
  const inner = {
    next() {
      const element = array[i];
      i++;
      return element;
    },
  };

  return inner;
}

const iterator = createFlow([11, 12, 13, 14, 15]);
console.log(iterator.next()); // 11
console.log(iterator.next()); // 12
console.log(iterator.next()); // 13
