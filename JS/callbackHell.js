//  Issues with callback: -> Callback hell -> inversion of control
const Placeorder = function () {
  const cart = function () {
    const payment = function () {
      const order = function () {
        const orderId = function () {
          console.log("Order placed successfully");
        };
      };
    };
  };
};
