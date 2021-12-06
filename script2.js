'use strict';

console.everyUser = function (users, prefix) {
  for (let i = 0; i < users.length; i++) {
    let userName = prefix + users[i].name;
    console.log(userName);
  }
}

const userpetya = {
    name: "petya",
   transactions: [123, 123213213, -5, -8],
    sum: 10
}


const uservasya = {
    name: "vasya",
    transactions: [10, 20, -5, -8],
    sum: 10
}

console.everyUser([userpetya, uservasya], 'Имя пользователя: ');