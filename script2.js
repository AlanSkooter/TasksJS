'use strict';

function cleanRoom(dirtyLevel) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)
    });
  }

cleanRoom(5).then((result) => {
  if (result < 0 || result > 10){
    console.log("Здесь слишком грязно!");
  } else {
  console.log(`Уборка проведена успешно за ${result} секунд`);
  }
});