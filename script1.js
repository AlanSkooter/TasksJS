'use strict';

let arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

let arrUnique = arr.reduce(unique => {
  arr.forEach(elem => {
    if (unique.indexOf(elem) === -1){
      unique.push(elem);
    }
  });
  return unique;
}, []);

console.log(arrUnique);