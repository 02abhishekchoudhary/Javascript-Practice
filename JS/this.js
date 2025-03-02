"use strict";

// *-> this in global space
console.log(this); // * gloalObject - window in browser, global object based on JS runtime env

// *-> this inside a function
function x() {
  // * the value depends on strict / non strict mode
  // * No strict mode -> window, Strict mode -> Undefined
  console.log(this);
}
x();

// *-> this in non strict mode - (this substitution) -> If the value of this keywword is undefined or null -> this keyword will be replaced with globalObject -> only in non strict mode
// ** -> this keyword value depends on how this is called (window)

// ** thiss value depends on how the function is called (window)
x(); // * calling without any referance -> undefined
// window.x(); // * calling with window refers to globalObject -> window

// *-> this inside a object's method
const student = {
  name: "Naruto",
  printName: function () {
    // console.log(this);
    console.log(this.name);
  },
};
student.printName();

const student2 = {
  name: "Hinata",
};

// *-> call apply bind methods (sharing methods)
student.printName.call(student2);
/*
let name = {
  firstname: "Naruto",
  lastname: "Uzumaki",
  // printFullName: function () {
  //   console.log(this.firstname + " " + this.lastname);
  // },
};

let printFullName = function (hometown, clan) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + clan
  );
};

let name2 = {
  firstname: "Hinata",
  lastname: "Hyuga",
};

// function borrowing:
// call
printFullName.call(name, "Konoha", "Uzumaki Clan");
printFullName.call(name2, "Konoha", "Hyuga Clan");

// apply
printFullName.apply(name2, ["Konoha", "Hyuga Clan"]);

// bind
let printMyName = printFullName.bind(name, "Konoha", "Uzumaki Clan");
// console.log(printMyName);
printMyName();
*/

// *-> this inside arrow function: Don't have their own this binding. It retains the this value of the enclosing lexical context.
let a = {
  n: 10,
  // x: function () {
  //   console.log(this.n);
  // },
  x: () => {
    console.log(this);
  },
};
a.x();

// *-> this inside nested arrow function:

const obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj.x();

// *-> this inside DOM: -> reference to the HTML element.

// * this inside class, constructor?
