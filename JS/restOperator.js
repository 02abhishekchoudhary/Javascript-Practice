"use strict";

const restaurant = {
  name: "Big Wong",
  location: "Noida Sector 144",
  categories: ["Korean", "Chinese", "Japanese", "Thai"],
  starteMenu: ["Sushi", "Ramen", "Chicken", "Noodles", "Beer"],
  mainMenu: ["Chicken Sushi", "Chicken Ramen", "Chicken Noodles"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starteMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starteMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderRamen: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious ramen with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderSushi: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 1) DESTRUCTURING
// While spread used for unpacked an array while rest operator used for pack an array.
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);
// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [sushi, , chicken, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starteMenu,
];
console.log(sushi, chicken, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 5);
add(2, 3, 4, 5, 6, 7, 8, 9);

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
add(...x);

restaurant.orderSushi("Chicken", "Rice", "Ketchup");
restaurant.orderSushi("Chicken");

// REST -> variable names seperated by comma
// SPREAD -> Values seperated by comma
