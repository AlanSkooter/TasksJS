'use strict';

function func()  {
    let times = 0;
    
    return function() {
      times++;
      console.log(times);
    }
  }

let timesCall = func();

timesCall();
timesCall();
timesCall();