"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// MAP:

const euroToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});
console.log(movementsUSD);

// FILTER

const credit = movements.filter(function (mov) {
  return mov > 0;
});
console.log(credit);

// REDUCE

const totalBalance = movements.reduce(function (acc, curr) {
  return curr + acc;
}, 0);
console.log(totalBalance);
