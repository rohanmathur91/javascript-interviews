function* createFlow() {
  yield 10;
  yield 20;
  yield 30;
}

const returnNextElement = createFlow(); // returns generator object
// console.log(returnNextElement.next()); // { value: 10, done: false }
// console.log(returnNextElement.next()); // { value: 20, done: false }
// console.log(returnNextElement.next()); // { value: 20, done: false }
// console.log(returnNextElement.next()); // { value: undefined, done: true }

function* createFlow1() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const iterator = createFlow1();
console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next(2)); // { value: 7, done: false }
console.log(iterator.next()); // { value: 6, done: false }
