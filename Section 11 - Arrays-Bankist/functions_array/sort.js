'use strict';

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

const new_o = owners.slice();

new_o.sort();

console.log(new_o, owners);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Ascending
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => b - a);
console.log(movements);

// console.log(
//     movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
//   }),
// );
