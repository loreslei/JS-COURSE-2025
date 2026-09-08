'use strict';

console.log(Math.sqrt(25));
console.log(27 ** (1 / 3));

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 3));

// Rounding integers

console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));


// Rounding decimals
console.log((2.7).toFixed(0))
console.log((2.7).toFixed(1))
console.log((2.7).toFixed(2))