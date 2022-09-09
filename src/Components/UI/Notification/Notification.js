import React from "react";
import classes from "./Notification.module.css";
import { AiOutlineCheck } from "react-icons/ai";

function Notification() {
  return (
    <div className={classes.notification}>
      <h3>Successfully Added To The Cart{" "}</h3>
      <AiOutlineCheck style={{marginLeft: '0.5rem'}} size="1.1em" />
    </div>
  );
}

export default Notification;
