'use strict';

class User {
  constructor(first_name, second_name, age, city){
    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
  }
}

const firstUser = new User('Иван', 'Иванов', 18, 'Минск');
const secondUser = new User('Петр', 'Петров', 20, 'Брест');

function info(){
  console.log(`Имя: ${this.first_name}, фамилия: ${this.second_name}, возраст: ${this.age}, город: ${this.city}.`);
}

info.call(firstUser);
info.call(secondUser);