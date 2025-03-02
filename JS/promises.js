//  Promises: Promise is an empty object which represent the eventual completion of async operation.

const cart = ["Shoes", "Mobiles", "Kurta"];

// createOrder
// proceedToPayment
// showOrderSummary
// updateWallet

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // Logic for createOrder
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successfull");
  });
}

function validateCart(cart) {
  return true;
}
