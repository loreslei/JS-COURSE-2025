'use strict';

const jonas = {
  firstName: 'Jonas',
  birth: '1991',
  job: 'unemployed',
  friends: ['Alex', 'Juniper', 'March'],
  calcAge: function () {
    const data = new Date();
    this.age = data.getUTCFullYear() - this.birth;
    return this.age;
  },

  summary: function(){
    this.calcAge()
    return `${this.firstName} is a ${this.age}-years old ${this.job}, and he has ${this.isActive? 'a': 'no'} work license`
  },
  isActive: true
};

// console.log(jonas.calcAge())
// console.log(jonas.age)

console.log(jonas.summary())