'use strict';

const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];    
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

    function getNewArrFromGroup() {
        let arr = arguments[0].concat(arguments[1]).filter(elem => elem % 2 == 0).filter(elem => elem < 0);
        for (let i = 1; i < arguments.length-1; i++){
            arr = arr.concat(arguments[i+1]).filter(elem => elem % 2 == 0).filter(elem => elem < 0);
        }
        arr.shift();
        arr.pop();
        return arr;
    }

let newArrFromGroup = getNewArrFromGroup(arr1, arr2, arr3);

console.log(newArrFromGroup);
console.log(arr1);
console.log(arr2);
console.log(arr3);