'use strict';

const factorial = n => {
    let result = 1;
    for (let i = 0; i < n; i++){
        result = result * (n - i);
    }
    console.log(result);
}

factorial(5);