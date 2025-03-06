// * Event CAPTURING : TOP TO BOTTOM
// * EVent BUBBLING: BOTTOM TO TOP
// * Event capturing will be done before event bubbling

// * The third argument of eventlistner will be boolean. By default it is set to FALSE and in that case it will bheave like event bubbling and in case of TRUE it will behave like event capturing.

// Event Bubbling
/*
document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked!");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked!");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked!");
  },
  false
);
*/

// EVent Capturing or TRICKLING
/*
document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked!");
  },
  true
);
*/

document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!");
    e.stopPropagation();
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
  },
  true
);
