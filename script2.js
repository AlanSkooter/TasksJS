'use strict';

function cleanRoom(dirtyLevel) {
  return new Promise ((resolve, reject) => {
    if (dirtyLevel < 0 || dirtyLevel > 10) {
      reject("Здесь слишком грязно!");
  } else {
      setTimeout(() => resolve(`Уборка проведена успешно за ${dirtyLevel} секунд`), dirtyLevel * 1000);
    }
  })
}

function cleanRoomsAll (dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  Promise.allSettled([
    cleanRoom(dirtyLevel_1),
    cleanRoom(dirtyLevel_2),
    cleanRoom(dirtyLevel_3)
  ])
  .then ((result) => {
      console.log(result);
  })
  .catch ((err) => {
    console.log(err);
  })
}

cleanRoomsAll(2, 3, 5);