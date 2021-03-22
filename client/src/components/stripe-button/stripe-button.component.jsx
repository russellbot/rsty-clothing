import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IRiFBDLPzRugVxF1GbOHCKyRSrmydXWWFd1EPMRULVjAeOO02ruRIysU08Bj3W33JP6R8h83dxKcK5WTbI9dOor007cJHBw5V";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment.  Please be sure to use the provided test credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="RSTY Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
