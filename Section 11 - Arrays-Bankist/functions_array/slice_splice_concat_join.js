const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////////////////////////

// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.slice(position)
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

// creates a shallow copy
console.log(arr.slice());

let arr3 = [...arr];
console.log(arr3);

// SPLICE - mutates original array

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT

const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])


// JOIN

console.log(letters.join(';'))
