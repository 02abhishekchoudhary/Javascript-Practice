"use strict";

const rest1 = {
  name: "Big Wong",
  numGuests: 20,
};

const rest2 = {
  name: "Big Wong",
  owner: "Naruto",
};

const rest3 = {
  name: "Big Bamg",
  numGuests: 0,
};

// LOGICAL OR ASSIGNMENT OPERATOR
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest3.numGuests = rest3.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest3.numGuests ||= 10;

// LOGICAL NULLISH COALESCING ASSIGNMENT OPERATOR
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
rest3.numGuests ??= 10;

// LOGICAL AND ASSIGNMENT OPERATOR : only assign the vaue to a variable is truthy
// rest1.owner = rest1.owner && '<ITACHI UCHIA>'
// rest2.owner = rest2.owner && '<ITACHI UCHIA>'
// rest3.owner = rest3.owner && '<ITACHI UCHIA>'

rest1.owner &&= "<ITACHI UCHIA>";
rest2.owner &&= "<ITACHI UCHIA>";
rest3.owner &&= "<ITACHI UCHIA>";

console.log(rest1);
console.log(rest2);
console.log(rest3);
