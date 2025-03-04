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

// LOGICAL OPERATOR PROPERTIES
// USE ANY data type, return ANY data type, short-circuiting

//* OR */
// SHORT circuiting on OR operator will return first truthy value of all the operand and return last value if all are falsy.
console.log(3 || "Naruto");
console.log("" || "Naruto");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Naruto" || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

restaurant.numGuests = 50;
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

//* AND */
// SHORT circuiting on AND operator will return first falsy value of all the operand and return last value if all are truthy.
console.log(3 && "Naruto");
console.log("" && "Naruto");
console.log(true && 0);
console.log(undefined && null);
console.log("Hinata" || (undefined && 0 && "" && "Naruto" && 23 && null));

// Practical example
if (restaurant.orderSushi) {
  restaurant.orderSushi("Chicken", "Rice");
}

restaurant.orderSushi && restaurant.orderSushi("Chicken", "Rice");
