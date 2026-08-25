'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => {
  return mov * eurToUsd;
});

console.log(movementsUSD);

const movements_desc = movements.map((mov, i) => {
  return `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

console.log(movements_desc);
