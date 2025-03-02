// Callback Function ->

setTimeout(function y() {
  console.log("Dattebayo");
}, 5000);

function x(y) {
  console.log("X");
  y();
}
x(function y() {
  console.log("Y");
});
