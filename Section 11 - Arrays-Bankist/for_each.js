const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// For each for arrays
movements.forEach((movement, index, array) => {
  movement > 0;
  // ? console.log(`${index+1}: You deposited ${movement}`)
  // : console.log(`${index+1}: You withdrew ${Math.abs(movement)}`);
});

// For each for maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
});

// For each for sets

const currenciesSet = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesSet.forEach((value, _, map)=>{
    console.log(`${value}: ${value}`);
})
// console.log(currenciesSet)