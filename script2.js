'use strict';

const users = [{name: 'Ivan', age: 18},
{name: 'Petr', age: 12},
{name: 'Sidor', age: 25},
{name: 'Pavel', age: 16},
{name: 'Sasha', age: 29}];

function addDiv(name, age) {
let userDiv = document.createElement('div');
document.body.prepend(userDiv);
userDiv.innerHTML = `<p> Имя пользователя: ${name}, возраст: ${age}. </p>`;
}

users.forEach(function(user) {
    let name = user.name;
    let age = user.age;
    addDiv(name, age);
  });