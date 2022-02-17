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

const germanCarsString = JSON.stringify(germanCarsArr);
const japanCarsString  = JSON.stringify(japanCarsArr);

//дополнение здесь
localStorage.setItem('germanCars', germanCarsString);
localStorage.setItem('japanCars', japanCarsString);

const germanList = document.createElement('ul');
document.body.prepend(germanList);
const germanCarsList = (elem) => {
  const germanCarLi = document.createElement('li');
  germanList.prepend(germanCarLi);
  germanCarLi.innerHTML = `name: ${elem.name}, model: ${elem.model}`;
}

const japanList = document.createElement('ul');
document.body.prepend(japanList);
const japanCarsList = (elem) => {
  const japanCarLi = document.createElement('li');
  japanList.prepend(japanCarLi);
  japanCarLi.innerHTML = `name: ${elem.name}, model: ${elem.model}`;
}

window.onload = () => {
  const germanCarsFromLocal = JSON.parse(localStorage.getItem('germanCars'));
  germanCarsFromLocal.forEach((elem) => {
    germanCarsList(elem);
  });
  const japanCarsFromLocal = JSON.parse(localStorage.getItem('japanCars'));
  japanCarsFromLocal.forEach((elem) => {
    japanCarsList(elem);
  });
}