'use strict';

async function cleanRoom(dirtyLevel) {
  return new Promise ((resolve, reject) => {
    if (dirtyLevel < 0 || dirtyLevel > 10){
      const error = new Error();
      reject(error);
  } else {
      setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000);
    }
  })
}

async function cleanRoomsStepByStep(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
  try {
    const result_1 = await cleanRoom(dirtyLevel_1);
    console.log(`Уборка проведена успешно за ${result_1} секунд`);
    } catch(err) {
      console.error("Здесь слишком грязно!");
    }

    try {
    const result_2 = await cleanRoom(dirtyLevel_2);
    console.log(`Уборка проведена успешно за ${result_2} секунд`);
    } catch(err) {
      console.error("Здесь слишком грязно!");
    }

    try {
    const result_3 = await cleanRoom(dirtyLevel_3);
    console.log(`Уборка проведена успешно за ${result_3} секунд`);
    } catch(err) {
    console.error("Здесь слишком грязно!");
  }
} 

cleanRoomsStepByStep(11, 3, 5);