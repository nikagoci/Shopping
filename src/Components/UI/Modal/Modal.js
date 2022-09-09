import React, { useContext, useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import CartContext from "../../../Context/CartContext";

function Modal(props) {
  const CartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false)

  if (!props.open) return null;

  const convertitle = (title, limit = 30) => {
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

  const checkoutHandler = () => {
    if(CartCtx.items.length > 0) {
      navigate("/Checkout", { replace: true });
      props.onClose();
    } else{
      setError(true)
    }
    
  };

  const removeHandler = (item) => {
    CartCtx.removeFromCart(item.title);
    CartCtx.removeTotalPrice(item.price);
  };

  return ReactDom.createPortal(
    <>
    
      <div className={classes.overlay} />
      <div className={classes.modal}>
        <h1>Your Cart Items:</h1>
        {error && <h3 className={classes.error}>Add Items To Proceed!</h3>}
        <ul>
          {CartCtx.items ? (
            CartCtx.items.map((content, index) => {
              return (
                <li key={index} onClick={() => removeHandler(content)}>
                  <img
                    className={classes.img}
                    src={content.img}
                    alt={content.title}
                  />
                  <p className={classes.title}>{convertitle(content.title)}</p>
                  <h3 className={classes.price}>{content.price}$</h3>
                </li>
              );
            })
          ) : (
            <h1 style={{ textAlign: "center", color: "red", marginTop: "30%" }}>
              No Items Found!
            </h1>
          )}
        </ul>
        <div className={classes.btnContainer}>
          <button onClick={checkoutHandler}>{props.children}</button>
          <button onClick={props.onClose}>Close Modal</button>
        </div>
      </div>
      ,
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
