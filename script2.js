'use strict';

const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];    
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];

    function getNewArrFromGroup(arr) {
        let sepArr = [];
        for (let i = 0; i < arr.length; i++){
            sepArr = sepArr.concat(arr[i]).filter(elem => elem % 2 == 0 && elem < 0);
        }
        sepArr.shift();
        sepArr.pop();
        return sepArr;
    }

let newArrFromGroup = getNewArrFromGroup([arr1, arr2, arr3]);

console.log(newArrFromGroup);