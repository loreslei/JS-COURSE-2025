'use strict';

const strs = [
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
];

for (const [index, str] of strs.entries()) {
  const [first, second] = str.toLowerCase().trim().split('_');
  const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

  console.log(`${output.padEnd(20)}${'❇️'.repeat(index + 1)}`);
}
