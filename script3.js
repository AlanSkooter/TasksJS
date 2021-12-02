'use strict';

let ChristmasTree = '';

for (let i = 0; i < 20; i++) {               
  for (let j = 0; j <= i; j++) {
    if ((i-j) % 2 == 0) {
        ChristmasTree += '*';
    } else {
        ChristmasTree += '_';
      }    
  }
  console.log(ChristmasTree);
  ChristmasTree = '';
}
