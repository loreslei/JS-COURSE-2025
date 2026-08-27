'use strict';

// const dataset = [16, 6, 10, 5, 6, 1, 4];
const dataset = [5, 2, 4, 1, 15, 8, 3];

const calcAvgAge = function (dogs) {
  let new_dogs = [];
  dogs.forEach((dog, i) => {
    let humanAge;
    if (dog <= 2) {
      humanAge = 2 * dog;
      new_dogs.push(humanAge);
    } else {
      humanAge = 16 + dog * 4;
      new_dogs.push(humanAge);
    }
  });

  new_dogs.map((age, i) => {
    if (age < 18) {
      new_dogs.splice(i, 1);
    }
  });

  let sum = new_dogs.reduce((acc, cur) => {
    return acc + cur;
  });

  let avg = sum / dogs.length;

  return Math.trunc(avg);
};

const calcAvgAgeJonas = function (dogs) {
  let humanAge = dogs.map((dogAge) => {
    return dogAge > 2 ? 16 + dogAge * 4 : dogAge * 2;
  });

  let adult_dogs = humanAge.filter((age) => {
    return age >= 18;
  });

  let avg =
    adult_dogs.reduce((acc, cur, i, arr) => {
      return acc + cur / arr.length;
    }, 0);

  return Math.trunc(avg);
};

console.log(calcAvgAgeJonas(dataset));
