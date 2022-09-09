import React from "react";
import CheckoutForm from "../Components/Checkout/CheckoutForm";
import CheckoutPanel from "../Components/Checkout/CheckoutPanel";
import Container from "../Components/UI/Container/Container";
import classes from '../Components/UI/AllCategory.module.css'

function Checkout() {
  return (
    <Container className={classes.wrapper}>
      <CheckoutForm />
      <CheckoutPanel />
    </Container>
  );
}

export default Checkout;
