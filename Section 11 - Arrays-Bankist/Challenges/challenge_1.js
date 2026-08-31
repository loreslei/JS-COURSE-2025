'use strict';
let julia = [9, 16, 6, 8, 3];
let kate = [10, 5, 6, 1, 4];

// let julia = [3, 5, 2, 12, 7];
// let kate = [4, 1, 15, 8, 3];

const checkDogs = function (j_arr, k_arr) {
  let j_arr_copy = j_arr.slice(1, -2);
  //   let j_arr_copy = j_arr.slice();
  //   j_arr_copy.splice(0, 1);
  //   j_arr_copy.splice(-2);

  let full_data = j_arr_copy.concat(k_arr);
  //   console.log(full_data);

  full_data.forEach((dog_age, i) => {
    dog_age < 3
      ? console.log(`Dog number ${i + 1} is still a puppy 🐶`)
      : console.log(
          `Dog number ${i + 1} is an adult, and is ${dog_age} years old`,
        );
  });
};

checkDogs(julia, kate);
