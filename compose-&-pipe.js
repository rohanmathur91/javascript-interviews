const multiplyByTwo = (n) => n * 2;
const addByThree = (n) => n + 3;
const divideByFive = (n) => n / 5;

// ---------- compose ----------
// Execute the functions from right to left from a functionArray
function compose(...functionArray) {
  return function (initialInput) {
    return functionArray.reduceRight((acc, func) => func(acc), initialInput);
  };
}

// ---------- pipe ----------
// Execute the functions from left to right from a functionArray
function pipe(...functionArray) {
  return function (initialInput) {
    return functionArray.reduce((acc, func) => func(acc), initialInput);
  };
}
