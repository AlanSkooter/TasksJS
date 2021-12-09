'use strict';

const array = [1, 2, 3, 4, 5, 1, 8, 3, 1];
let index;
let counter = 0;

    function secondIndexOf(elem) {
        for (let i = 0; i < array.length; i++){
           if (array[i] == elem && counter < 2) {
               index = i;
               counter++;
           }
        }
        return index;
    }

let secondTimesIndex = secondIndexOf(1);

console.log(secondTimesIndex);