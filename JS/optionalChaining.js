"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0,
      close: 24,
    },
  },
};

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

console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon.open);

// Without optional chaining:
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// EXAMPLE:
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // const open = restaurant.openingHours[day]?.open || 'closed';
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods:
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.sushi?.(0, 1) ?? "Method does not exist");

// ARRAYS
const ninja = [
  {
    name: "Naruto",
    emaail: "narutouzumaki@gmail.com",
  },
];

console.log(ninja[0]?.name ?? "Ninja array empty");
console.log(ninja[1]?.name ?? "Ninja array empty");
