import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";
import { ReactComponent as ReactLogo } from "../../assets/media.svg";
import classes from "./Navbar.module.css";
import Modal from "../../UI/Modal/Modal";
import CartContext from "../../../Context/CartContext";

const CART_ICON =
  "https://transvelo.github.io/mediacenter-html/assets/images/icon-cart.png";

function Navbar(props) {
  const CartCtx = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);

  const cartOpenHandler = () => {
    setOpenModal(true);
  };

  return (
    <nav>
      <Container className={classes.container}>
        <Link to="/Category/AllCategory">
          <ReactLogo className={classes["logo-svg"]} />
        </Link>
        <form className={classes.divSearch}>
          <input
            type="text"
            className={classes.input}
            placeholder="Search for item"
            onChange={(e) => props.onInputChange(e.target.value)}
          />
        </form>
        <button
          type="button"
          onClick={cartOpenHandler}
          className={classes.cart}
        >
          <div>
            <a href="#">
              <span>{CartCtx.items.length}</span>
            </a>
            <a href="#">
              <img src={CART_ICON} alt="shop-icon" />
            </a>
          </div>
          <div>
            <h3>Your Cart:</h3>
            <h2>{`${CartCtx.totalPrice.toFixed(2)}$`}</h2>
          </div>
        </button>
        {openModal && (
          <Modal
            finalContent={props.modalFinalContent}
            open={openModal}
            onClose={() => setOpenModal(false)}
          >
            Checkout
          </Modal>
        )}
      </Container>
    </nav>
  );
}

export default Navbar;
