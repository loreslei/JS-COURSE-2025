'use strict';

function calcTip(bill_value) {
  const tip =
    bill_value >= 50 && bill_value <= 300
      ? bill_value * 0.15
      : bill_value * 0.2;
  return tip;
}

const bills = [125, 555, 44];

const tips = [];

const totals = [];

bills.forEach((bill) => {
  tips.push(calcTip(bill));
});

for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}


console.log(tips);
console.log(totals);
