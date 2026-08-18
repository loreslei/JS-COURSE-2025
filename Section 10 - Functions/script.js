'use strict';

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate){
//     return function(value){
//         return value + value * rate
//     }
// }

// const addVAT2 = addTaxRate(0.23)(100);
// console.log(addVAT2)

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let formated_q = this.options.join('\n');
    console.log(formated_q);
    const decision = Number(prompt(`${this.question}\n${formated_q}`));

    typeof decision === 'number' && decision <= this.answers.length
      ? (this.answers[decision] += 1)
      : console.error('Número inválido');

    this.displayResults();
    // this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers.join(', '));
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
