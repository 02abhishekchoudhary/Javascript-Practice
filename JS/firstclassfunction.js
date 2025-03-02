//  Function statement -> Can be hoisted
function a() {
  console.log("A Dattebayo");
}

// Function expression -> Cannot hoisted
var b = function () {
  console.log("B Dattebayo");
};

// Function declaration -> aka function statement

// Anonymous function -> Used whem function used as values
(function () {
  //...
});

// Named function expression
var c = function xyz() {
  console.log("C Dattebayo");
};
// c();
// xyz(); will throe am error

// Parameters and Arguments
function d(parameters) {
  console.log("D dattebayo", parameters);
}
d("Arguments");

// First class functions: Abillities fo usinng function as passing as argument, return function from function, treated as value. -> Storing functions in variables -> Passing a function to another function -> Returning functions from functions -> You can pass functions to other functions as arguments, return them from other functions as values, and store them in variables.

// Arrow functions
