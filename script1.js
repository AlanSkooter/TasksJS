'use strict';

function invert(data) {
  let result = Array.isArray(data) ? [] : '';

  for (let i = 0; i < data.length; i++){
    if(Array.isArray(data)){
      result.unshift(data[i]);
    } else {
      result = data[i] + result;
    }
  }
  return result;
}

let string = invert('Hello');
console.log(string);

let arr = invert([1, 2, 3, 4, 5]);
console.log(arr);