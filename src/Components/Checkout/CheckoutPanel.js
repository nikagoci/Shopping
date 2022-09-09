import React, { useContext } from "react";
import classes from "./CheckoutPanel.module.css";
import CartContext from "../../Context/CartContext";

const CheckoutPanel = () => {
  const CartCtx = useContext(CartContext);

  const convertitle = (title, limit = 15) => {
    const newTitle = [];
    if (title.length > limit) {
      title.split(" ").reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);

      return `${newTitle.join(" ")}...`;
    }

    return title;
  };


  return (
    <div className={classes.checkoutPanel}>
      <div className={classes.firstSide}>
        <h1>Your Orders</h1>
        <ul>
          {CartCtx.items.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.price}$</h3>
              <h2>{convertitle(item.title)}</h2>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.secondSide}>
            <h2>Total Price:</h2>
            <h3>{CartCtx?.totalPrice}$</h3>
      </div>
    </div>
  );
};

export default CheckoutPanel;
