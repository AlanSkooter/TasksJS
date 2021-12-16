'use strict';

let arr = [];

const fibonachi = function(n) {
    if (n === 1) {
        return [0, 1];
      } else {
        arr = fibonachi(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
      }
    };

arr = fibonachi(8); 

console.log(arr);