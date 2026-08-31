'use strict';

// const dataset = [16, 6, 10, 5, 6, 1, 4];
const dataset = [5, 2, 4, 1, 15, 8, 3];

const calcAvgAgeJonas = function (dogs) {
  let avg = dogs
    .map((dogAge) => (dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2))
    .filter((age) => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  return Math.trunc(avg);
};

console.log(calcAvgAgeJonas(dataset));
