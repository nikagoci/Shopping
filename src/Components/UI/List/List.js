import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from "../Card/Card";
import classes from "./List.module.css";
import Button from "../Button/Button";
import Notification from "../Notification/Notification";
import { AiOutlineCheck } from "react-icons/ai";
import CartContext from "../../../Context/CartContext";

function List(props) {
  const CartCtx = useContext(CartContext)
  const navigate = useNavigate();

  const storedItems = CartCtx.items.find(o => o.id === props.id);

  const disableButton = storedItems ? true : false

  const [isShowNotification, setIsShowNotification] = useState(false);

  const convertitle = (title, limit = 14) => {
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

  function buyHandler (){
    const modalObject = [
      { title: props.title, img: props.img, price: props.price },
    ];
    props.modalContent(modalObject);

    setTimeout(() => {
      setIsShowNotification(true);
    })

    setTimeout(() => {
      setIsShowNotification(false);
    }, 2000)
    
    CartCtx.addToCart(props);
    CartCtx.calculateTotalPrice(props.price)
    };


  return (
    <Card className={classes["list-wrapper"]}>
      <div className={classes.first}>
        <img src={props.img} alt={props.title} />
        <p>{convertitle(props.title)}</p>
      </div>
      <div className={classes.second}>
        <h3>{`${props.price}$`}</h3>
        <Button disabled={disableButton} className={classes.firstButton} onClick={buyHandler}>Buy Now</Button>
        <Button onClick={() => navigate(`/Products/${props.id}` , { replace: true })} className={classes.secondButton}>Show More...</Button>
      </div>
      {isShowNotification && <Notification />}
    </Card>
  );
}

export default List;
