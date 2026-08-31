'use strict';

console.log(0.1 + 0.2);

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing if binary, second parameter is 2
console.log(Number.parseInt('30px', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Check if value is finite number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));


// Check if value is integer
console.log(Number.isInteger(20));
console.log(Number.isInteger('20'));
console.log(Number.isInteger(+'20X'));
console.log(Number.isInteger(23 / 0));
