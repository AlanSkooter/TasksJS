'use strict';

const promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(), 5000);
});

promise
    .then(() => {
    console.log("Команата убрана");
    });