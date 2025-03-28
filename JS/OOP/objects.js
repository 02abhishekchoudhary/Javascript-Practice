//  Key data type in object -> String & Symbol. If we pass any diff data types as key it will convert that into string at excution.
// Value data type in object -> ANy data type

//Different ways of creating object
// 1 -> Object literals

const naruto = {
  name: "Naruto Uzumaki",
  age: 15,
  clan: "Uzumaki",
  quotes() {
    console.log("Dattebayo");
  },
};

// 2 -> Using the new Object() Constructor
const ninja = new Object();
ninja.name = "Naruto Uzumaki";
ninja.age = 15;
(ninja.clan = "Uzumaki Clan"),
  (ninja.summaryy = function () {
    console.log(`Summary of - ${this.name}`);
  });

ninja.summaryy();

// 3 -> Using the constructor function - before ES6
function Ninja(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello ${this.name}`);
  };
}

const itachi = new Ninja("Itachi Uchia", 25);
itachi.greet();

// 4 -> Creating objects using classes
class Ninjas {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }
  summary() {
    console.log(`${this.name} is ${this.rank}`);
  }
}

const itachiUchia = new Ninjas("Itachi Uchia", "Chunin");
itachiUchia.summary();

// 5 -> Object.create() method
const animal = {
  speak() {
    console.log(`${this.name} mskes a sound`);
  },
};

const cat = Object.create(animal);
cat.name = "Bosa";
cat.speak();
console.log(cat);
