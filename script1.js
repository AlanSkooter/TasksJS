'use strict';

function avg1() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  let average = sum/arguments.length;
  return average;
}

let example1 = avg1(1, 2, 3, 4, 5);

console.log(example1);

let avg2 = function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  let average = sum/arguments.length;
  return average;
};

let example2 = avg2(1, 2, 3, 4, 5);

console.log(example2);

let avg3 = (...args) => { 
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  let average = sum/args.length;
  return average;
};

let example3 = avg3(1, 2, 3, 4, 5);

console.log(example3);