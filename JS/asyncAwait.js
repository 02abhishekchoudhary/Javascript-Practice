//  Async

// always returns a promise
// async function getData() {
//   console.log("Dattebayo");
// }

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 Resolved Value!!");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 Resolved Value!!");
//   }, 10000);
// });

// Await: await is a keyword which always can be used inside an async function

// async function handlePromise() {
//   console.log("Minnato Namikaze");
//   // JS engine was waiting for promise to resolved
//   const val = await p1;
//   console.log("Naruto Uzumaki");
//   console.log(val);

//   const val2 = await p2;
//   console.log("Baruto Uzumaki");
//   console.log(val2);
// }
// handlePromise();

// function getData() {
//   // JS engie will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Naruto Uzumaki");
// }
// getData();

const API_URL = "https://api.github.com/users/02abhishekchoudhary";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonvalue = await data.json();
    console.log(jsonvalue);
  } catch (error) {
    console.log(error);
  }
}
handlePromise();
