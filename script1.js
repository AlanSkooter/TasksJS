'use strict';

function getDateAgo(date, days) {
  let dateCurrent = new Date(date);
  let dateFinal = new Date(dateCurrent - days*24*60*60*1000);
    return `${dateFinal.getMonth() + 1}-${dateFinal.getDate()}-${dateFinal.getFullYear()}`;
}

console.log(getDateAgo("3-20-2020", 10));