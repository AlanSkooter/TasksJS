'use strict';

const str = '[{"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"name": "Nissan", "model": "Silvia (S14)"}, {"name": "Volkswagen", "model": "Golf MK 3"}]';

const germanCars = ["BMW", "Volkswagen"];
const japanCars = ["Honda", "Nissan"];

const arr = JSON.parse(str);

let germanCarsArr = [];
let japanCarsArr = [];

arr.forEach((elem) => {
  for (let key in elem) {
    for (let i = 0; i < germanCars.length; i++) {
      if (elem[key] == germanCars[i]) {
        germanCarsArr.push(elem);
      }
    }
  }
});

arr.forEach((elem) => {
  for (let key in elem) {
    for (let i = 0; i < japanCars.length; i++) {
      if (elem[key] == japanCars[i]) {
        japanCarsArr.push(elem);
      }
    }
  }
});

let germanCarsString = JSON.stringify(germanCarsArr);
let japanCarsString  = JSON.stringify(japanCarsArr);

console.log(germanCarsString);
console.log(japanCarsString);