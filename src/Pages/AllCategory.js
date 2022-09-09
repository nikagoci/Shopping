import React from "react";
import Container from "../Components/UI//Container/Container";
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import MenClothes from "./MensClothes";
import WomenClothes from "./WomenClothes";
import classes from "../Components/UI/AllCategory.module.css";

function AllCategory(props) {
  const modalContent = (data) => {
    props.modalContent(data);
  };

  return (
    <Container className={classes.midContainer}>
      <Electronics modalContent={modalContent} input={props.inputValue} />
      <Jewelery modalContent={modalContent} input={props.inputValue} />
      <MenClothes modalContent={modalContent} input={props.inputValue} />
      <WomenClothes modalContent={modalContent} input={props.inputValue} />
    </Container>
  );
}

export default AllCategory;
