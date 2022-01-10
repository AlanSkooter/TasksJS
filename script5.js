'use strict';

function User(first_name, second_name, age, city) {

    this.first_name = first_name;
    this.second_name = second_name;
    this.age = age;
    this.city = city;
}

const firstUser = new User('Иван', 'Иванов', 20, 'Минск');
const secondUser = new User('Петр', 'Петров', 22, 'Брест');

console.log(firstUser);
console.log(secondUser);