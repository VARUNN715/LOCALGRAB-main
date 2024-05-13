// Payment.js
import React from 'react';

const Payment = () => {
  return (
    <div style={{backgroundColor: "red", width: "350px", height: "450px", marginLeft: "500px", marginTop: "50px"}}>
      <img src="qr.png" alt="Scan to pay" />
      <a href="https://buy.stripe.com/test_9AQ8A3cpUdH8dqw147">Click me</a>
    </div>
  );
};

export default Payment;