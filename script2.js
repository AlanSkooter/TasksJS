'use strict';

const str = '[{"name": "BMW", "model": "5-series e39"}, {"name": "Honda", "model":  "Civic (5G)"}, {"name": "Nissan", "model": "Silvia (S14)"}, {"name": "Volkswagen", "model": "Golf MK 3"}]';

const germanCars = ["BMW", "Volkswagen"];
const japanCars = ["Honda", "Nissan"];

const arr = JSON.parse(str);

let germanCarsArr = [];
let japanCarsArr = [];

arr.forEach((elem) => {
    if (germanCars.includes(elem.name)) {
        germanCarsArr.push(elem);
    } else if (japanCars.includes(elem.name)) {
      japanCarsArr.push(elem);
    }
});

let germanCarsString = JSON.stringify(germanCarsArr);
let japanCarsString  = JSON.stringify(japanCarsArr);

console.log(germanCarsString);
console.log(japanCarsString);