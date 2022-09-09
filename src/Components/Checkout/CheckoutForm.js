import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import classes from "./CheckoutForm.module.css";
import Modal from "../UI/Modal/Modal";

function CheckoutForm(props) {
  const [openModal, setOpenModal] = useState(false);
  console.log(props.finalOrders);
  const masterCard =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png";
  const visaCard =
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png";
  const payPal =
    "https://seeklogo.com/images/P/paypal-logo-6ED6A5924E-seeklogo.com.png";

  return (
    <>
      <form className={classes.checkoutForm}>
        <div className={classes.first}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your Name" id="name" />
          </div>
          <div>
            <label htmlFor="lastname">Lastname</label>
            <input type="text" placeholder="Your Lastname" id="lastname" />
          </div>
        </div>

        <div className={classes.second}>
          <label htmlFor="mail">Mailbox</label>
          <input type="email" id="mail" placeholder="Your Mail" />
        </div>

        <div className={classes.third}>
          <div>
            <input type="radio" name="credit" id="mastercard" />
            <label htmlFor="mastercard">
              <img src={masterCard} alt="MasterCard" />
            </label>
          </div>
          <div>
            <input type="radio" name="credit" id="visacard" />
            <label htmlFor="visacard">
              <img src={visaCard} alt="VisaCard" />
            </label>
          </div>
          <div>
            <input type="radio" name="credit" id="paypal" />
            <label htmlFor="paypal">
              <img src={payPal} alt="payPal" />
            </label>
          </div>
        </div>

        <div className={classes.fourth}>
          <label htmlFor="credit">Credit Card NO.</label>
          <input type="text" placeholder="Your Credit Card NO." id="credit" />
        </div>

        <div className={classes.fifth}>
          <Button type="submit">Submit Order</Button>
        </div>
      </form>

      {openModal && (
        <Modal
          finalContent={props.finalOrders}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default CheckoutForm;
