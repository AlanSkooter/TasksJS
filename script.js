"use strict";

const user = {  
    name: prompt('Твое имя?'), 
    surname: prompt('Твоя фамилия?'),
    age: Number(prompt('Сколько тебе лет?')),
    city: prompt('Из какого ты города?'),
    isDriver: confirm('Есть водительское удостоверение?'),       
  };

  if (user.isDriver == true) {
    console.log(`Привет, меня зовут ${user.name} ${user.surname}, мне ${user.age} лет, я живу в городе ${user.city}, я вожу автомобиль`);
  } else {
    console.log(`Привет, меня зовут ${user.name} ${user.surname}, мне ${user.age} лет, я живу в городе ${user.city}, я не езжу за рулем`);
  }