'use strict';

let expectedColor = prompt('Загадайте цвет');
let attemptNumber = Number(prompt('Введите количество попыток'));
let color = prompt('Угадайте цвет');
let i = 1;
    
 while (color !== expectedColor && i < attemptNumber){
    alert('Вы не угадали');
    color = prompt('Угадайте цвет'); 
    i++;
  }

  if (color !== expectedColor && i == attemptNumber) {
    alert('Попытки закончились, вы не угадали');
  } else {
    alert('Вы угадали');
  }
