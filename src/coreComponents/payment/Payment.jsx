import "./payment.scss";
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { axiosInstance, REACT_APP_PAYSTACK } from "../../config";

const KEY = REACT_APP_PAYSTACK;

const Payment = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const amount = 3500;

  const handlePayment = async () => {
    try {
      await axiosInstance.put("/engineer/subscription-subscribe", { email, amount });
      return alert("Payment successfull! Kindly go back.");
    } catch (error) {
      return alert(error.response.data);
    }
  };

  const componentProps = {
    email: email,
    amount: amount * 100,
    metadata: {
      name: fullName,
      phone: phoneNumber,
    },
    publicKey: KEY,
    text: "Proceed to make payment of #3500",
    onSuccess: () =>
      setTimeout(() => {
        return handlePayment();
      }, 1000),
    onClose: () => window.location.reload(),
  };

  return (
    <div className="payment">
      <h3>Renew your subscription</h3>
      <div className="row">
        <div className="col-md-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter registered email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Enter registered full name"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            className="form-control"
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="Enter registered phone number"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-control"
          />
          <PaystackButton {...componentProps} className="btn btn-primary" />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Payment;
