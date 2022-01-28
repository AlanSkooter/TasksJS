'use strict';

const users = [{name: 'Ivan', age: 18},
{name: 'Petr', age: 12},
{name: 'Sidor', age: 25},
{name: 'Pavel', age: 16},
{name: 'Sasha', age: 29}];

const userList = document.createElement('ul');
document.body.append(userList);

function addDiv(name, age) {
const userDiv = document.createElement('div');
const userLi = document.createElement('li');
userList.prepend(userLi);
userLi.prepend(userDiv);
userDiv.innerHTML = `<p> Имя пользователя: ${name}, возраст: ${age}. </p>`;
}

users.forEach(function(user) {
    const name = user.name;
    const age = user.age;
    addDiv(name, age);
  });

  const button = document.getElementById('btn');
  const inputName = document.getElementById('inputName');
  const inputAge = document.getElementById('inputAge');
  const warning = document.createElement('div');
  userList.before(warning);
  
    button.onclick = () => {
      if (inputName.value == '' || inputAge.value == '') {
        warning.innerHTML = `<p id = "warning" style="color: red"> Введите имя и возраст пользователя! </p>`; 
      } else {
        warning.innerHTML = '';
        const name = inputName.value;
        const age = +inputAge.value;
        users.push({name: name, age: age});
        const userDiv = document.createElement('div');
        const userLi = document.createElement('li');
        userList.prepend(userLi);
        userLi.prepend(userDiv);
        userDiv.innerHTML = `<p> Имя пользователя: ${name}, возраст: ${age}. </p>`;
      }
      inputName.value = '';
      inputAge.value = '';
    }  