const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills  = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const totals = []



for(const bill of bills){
    tips.push(calcTip(bill))
}


for(let i = 0; i < bills.length; i++){
    totals.push(tips[i] + bills[i])
}


const calcAverage = function(arr) {
    let sum = 0;
    arr.forEach((number) => {
        sum += number;
    });

    return sum/arr.length;

}

console.log(calcAverage(totals))