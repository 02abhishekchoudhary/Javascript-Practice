//  Promises and mutation observer goes into the microtask queue aka task queue.
// STARVATION in callback queue? Callback queue does not get chance to execute callback function because of microtask queue continuously executing functions. https://medium.com/@sumedhakoranga/starvation-in-javascript-0a98f0824272

// Mark & Sweep? Inlining? Copy eelision? Inline caching
// Concurrency model in JS
// Date API in JS

console.log("Start");

setTimeout(function () {
  console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While Expires");
