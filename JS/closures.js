// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// Function along with its lexical scope bundled together forms a closures.

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("Dattebayo");
// }
// x();

function outest() {
  var c = 10;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 20;
    return inner;
  }
  return outer;
}
var close = outest()("Dattebayo")();
