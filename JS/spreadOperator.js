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
};

// Without spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// With Spread Operator
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Ichiraku Ramen"];
console.log(newMenu);

// Spread operator is bit si,ilar to destructring, because it also helps us get elements out of arrays. Now, the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables. And as a consequence, we can only use it in places where we would otherwise write values seperated by commas.

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.starteMenu, ...restaurant.mainMenu];
console.log(menu);

// Built in JS data structures are iterable sexcept objects.
// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Naruto";
const letters = [...str];
console.log(letters);
console.log(...str);

// Not work in case of:
// console.log(`${...str} uzumaki`);
// Because multiple value seperated by a comma are usually expected when we pass arguments into a function, or when we build a new array.

// Real world example
const ingredients = [
  prompt("Lets make ramen! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];
console.log(ingredients);

// Without spread operator
restaurant.orderRamen(ingredients[0], ingredients[1], ingredients[2]);

// With spread operator
restaurant.orderRamen(...ingredients);

//  In ES2018 spread operator also works in objects.
const newRestaurant = {
  foundedIn: 2018,
  ...restaurant,
  founder: "Itachi Uchia",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Konoha Ichiraku Ramen";
console.log(restaurantCopy.name);
console.log(restaurant.name);
