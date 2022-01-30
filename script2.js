'use strict';

function cleanRoom(dirtyLevel) {
  if (dirtyLevel < 0 || dirtyLevel > 10){
    console.log("От 0 до 10, дурак!");
  } else {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
    })
    .then(result => console.log(`Уборка проведена успешно за ${result} секунд`));
  }
}