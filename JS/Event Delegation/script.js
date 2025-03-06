// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log("Category parent clicked!");
//   if (e.target.tagName == "LI") {
//     window.location.href = "/" + e.target.id;
//   }
// });

document.querySelector("#form").addEventListener("keyup", (e) => {
  // console.log(e);
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

// Benifits of event DELEGATION: -> It improves alot in memory -> iNcrease performancee -> less code -> DOM Manipulation.

// Limitations: -> All the events are not bubbled up. ->
