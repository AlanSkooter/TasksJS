'use strict';

const users =  [
  {name: 'Ivan', age: 18},
  {name: 'Petr', age: 12},
  {name: 'Sidor', age: 25},
  {name: 'Pavel', age: 16},
  {name: 'Sasha', age: 29}];

users.sort((a,b) => a.age > b.age ? 1 : -1);

let sumYoung = users.reduce((sum, user) => {
  if (user.age < 18) {
    sum = sum + user.age;
  }
  return sum;
}, 0);

console.log(users);
console.log(sumYoung);