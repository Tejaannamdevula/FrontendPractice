// let sum = function (a) {
//   // Write your code here
// };

// console.log(sum(1)(2)(5)());
// Using closures and recursion
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

// ES6

let sum1 = (a) => (b) => b ? sum1(a + b) : a;

console.log(sum(1)(2)(3)());
console.log(sum1(1)(2)(3)());
