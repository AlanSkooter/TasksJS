'use strict';

let age = Number(prompt('Введите Ваш возраст?'));

  if (isNaN(age) || age <= 0) {
    console.log('Неверно указан возраст');
  } else {
    console.log(`Привет, мне ${age} лет`);
  };

  let result = isNaN(age) || age <= 0 ? 'Неверно указан возраст' : `Привет, мне ${age} лет`;
  console.log(result);