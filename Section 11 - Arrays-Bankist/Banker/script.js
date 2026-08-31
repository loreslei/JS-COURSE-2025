'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class='movements__row'>
      <div class='movements__type movements__type--${type}'>${i + 1} ${type}</div>
      <div class='movements__value'>R$ ${mov}</div>
    </div>;`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplaySummary = function (movements, ir) {
  // Incomes
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `R$ ${incomes}`;

  // Outcomes
  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `R$ ${Math.abs(outcomes)}`;

  // Interest
  const interest = movements
    .filter((mov) => mov > 0)
    .map((dep) => (dep * ir) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `R$ ${interest.toFixed(2).replace('.', ',')}`;
};

const calcDisplayBalance = function (acc) {
  labelBalance.textContent = `R$ ${acc.balance}`;
};

const createUsernames = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((names) => {
        return names[0];
      })
      .join('');
  });
};

const createBalance = function (accs) {
  accs.forEach((acco) => {
    acco.balance = acco.movements.reduce((acc, cur) => acc + cur, 0);
  });
};

const getAccount = function (username, pin, accs) {
  return accs.find(
    (user) =>
      (user?.username === username || user?.owner === username) &&
      user?.pin === Number(pin),
  );
};

const closeAccount = function (username, pin, acc, accs) {
  const index = accs.findIndex((user) => username === user.username);
  if (username === acc?.username && Number(pin) === acc?.pin) {
    accs.splice(index, 1);
  }
};

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc.movements, acc.interestRate);
};

createUsernames(accounts);
createBalance(accounts);
let acc;
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  acc = getAccount(inputLoginUsername.value, inputLoginPin.value, accounts);

  // Display
  updateUI(acc);

  // Clear input fields
  inputLoginUsername.value = '';
  inputLoginPin.value = '';

  // Blur fields
  inputLoginPin.blur();
  inputLoginUsername.blur();

  labelWelcome.textContent = `Welcome back, ${acc.owner.split(' ')[0]}`;

  containerApp.style.opacity = 100;
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);

  const receiver = accounts.find(
    (user) => user?.username === inputTransferTo.value,
  );

  if (
    amount > 0 &&
    acc.balance >= amount &&
    receiver?.username !== acc.username
  ) {
    acc.balance -= amount;
    receiver.balance += amount;
    acc.movements.push(-amount);
    receiver.movements.push(amount);

    // UI
    updateUI(acc);

    // Clean inputs
    inputTransferAmount.value = '';
    inputTransferTo.value = '';

    inputTransferTo.blur();
    inputTransferAmount.blur();
    console.log('Transfer valid');
  }
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  closeAccount(inputCloseUsername.value, inputClosePin.value, acc, accounts);
  console.log('Fechou');

  // Clean inputs
  inputCloseUsername.value = '';
  inputClosePin.value = '';

  inputCloseUsername.blur();
  inputClosePin.blur();

  // Hide UI
  containerApp.style.opacity = 0;

  labelWelcome.textContent = 'Log in to get started';
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && acc.movements.some((mov) => mov >= amount * 0.1)) {
    acc.movements.push(amount);

    // Update UI
    acc.balance += amount;
    updateUI(acc);

    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

let desordenar = 1;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  desordenar *= -1;
  if (desordenar === -1) {
    acc.orderedMovements = acc.movements.slice().sort((a, b) => a - b);
    console.log(acc.orderedMovements);
    displayMovements(acc.orderedMovements);
  } else {
    displayMovements(acc.movements);
  }
});

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
