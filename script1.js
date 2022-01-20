'use strict';

function firstInvert(data) {
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

let firstString = firstInvert('Hello');
console.log(firstString);

let firstArr = firstInvert([1, 2, 3, 4, 5]);
console.log(firstArr);


function secondInvert(data) {
  let result = [...data];
    for (let i = 0; i < data.length/2; i++){
    result[i] = data[data.length-1-i];
    result[data.length-1-i] = data[i];
    } 
  return result;
  }

let secondString = secondInvert('Hello');
console.log(secondString.join(''));

let secondArr = secondInvert([1, 2, 3, 4, 5]);
console.log(secondArr);