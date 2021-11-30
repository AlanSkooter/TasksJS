'use strict';

let age = Number(prompt('Введите Ваш возраст?'));

  if (isNaN(age) || age <= 0) {
    console.log('Неверно указан возраст');
  } else if (age > 18) {
    console.log(`Здравствуйте, мне ${age} лет`);
  } else {
    console.log(`Привет, мне ${age} лет`);
  };

  switch (true) {
    case (isNaN(age) || age <= 0):
        console.log('Неверно указан возраст');
      break;
    case (age > 18):
        console.log(`Здравствуйте, мне ${age} лет`);
      break;
    default:
        console.log(`Привет, мне ${age} лет`);
  }