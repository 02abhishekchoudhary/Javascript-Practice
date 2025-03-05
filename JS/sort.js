"use strict";

// SORT method does sorting on base of string. It will mutates the array.
// Strings:
const owners = ["Naruto", "Itachi", "Kakashi", "Hinata", "Shikamaru"];
console.log(owners.sort());
console.log(owners);

// NUMBERS:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);

movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});
console.log(movements);
