'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// // case sensitive
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1 - 1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof new String('jonas').slice(1));

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// difs among slice, splice. Splice

const rows = flights.split('+');

for (const flight of rows) {
  const [info, place1, place2, hour] = flight.split(';');
  const nameP1 = place1.toUpperCase().slice(0, 3);
  const nameP2 = place2.toUpperCase().slice(0, 3);

  const fixed_info = info.replaceAll('_', ' ').trim();

  const fixed_hour = hour.replace(':', 'h');

  const first = fixed_info.split(' ')[0] === 'Delayed' ? '⛔ ' + fixed_info : fixed_info

  const output = `${first} from ${nameP1} to ${nameP2} (${fixed_hour})`

  console.log(output.padStart(36
    
  ));
}
