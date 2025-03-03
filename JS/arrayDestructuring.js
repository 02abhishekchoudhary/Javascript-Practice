"use strict";

// * Arrays:

//  * Destructuring assignment : The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. left side of assignment operator.

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

const restaurant = {
  name: "Big Wong",
  location: "Noida Sector 144",
  categories: ["Korean", "Chinese", "Japanese", "Thai"],
  starteMenu: ["Sushi", "Ramen", "Chicken", "Noodles", "Beer"],
  mainMenu: ["Chicken Sushi", "Chicken Ramen", "Chicken Noodles"],

  order: function (starterIndex, mainIndex) {
    return [this.starteMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Unpacking values
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Swapping variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// By using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return vlues from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
