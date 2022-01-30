'use strict';

function cleanRoom() {
  setTimeout(() => console.log("Команата убрана"), 5000);
  }

cleanRoom();

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(), 5000)
});

promise
    .then(() => {
    console.log("Команата убрана")
    });