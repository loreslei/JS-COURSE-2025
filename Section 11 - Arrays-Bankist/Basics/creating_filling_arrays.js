const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));

x.fill(1, 3);
console.log(x);

let arr = [1, 2, 3, 4, 5, 6, 7];

// Último número é exclusivo
arr.fill(23, 4, 6);

console.log(arr);

// Array.from

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

const randomDice = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1,
);
console.log(randomDice);


console.log(movements);
const reverseMov = movements.toReversed();
console.log(movements);
