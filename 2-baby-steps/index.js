'use strict';

const numbers = process.argv.splice(2);

const sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + parseInt(currentValue);
}, 0);

console.log(sum);
