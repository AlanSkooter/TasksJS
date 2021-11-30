'use strict';

let a = Number(prompt('Введите число?'));

  if (a == 0) {
    console.log('Неверно');
  } else {
    console.log('Верно');
  };

  let result = a == 0 ? 'Неверно' : 'Верно';
  console.log(result);