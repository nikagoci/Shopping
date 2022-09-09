import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button/Button";
import classes from "./Categories.module.css";

function CategoriesNavbar() {
  return (
    <div className={classes.categories}>
      <NavLink className={({isActive}) => isActive ? classes.active : ''} to="AllCategory"><Button>All Category</Button></NavLink>
      <NavLink className={({isActive}) => isActive ? classes.active : ''} to="Electronics"><Button>Electronics</Button></NavLink>
      <NavLink className={({isActive}) => isActive ? classes.active : ''} to="Jewelery"><Button>Jewelery</Button></NavLink>
      <NavLink className={({isActive}) => isActive ? classes.active : ''} to="MenClothes"><Button>Men's Clothes</Button></NavLink>
      <NavLink className={({isActive}) => isActive ? classes.active : ''} to="WomenClothes"><Button>Women's Clothes</Button></NavLink>
    </div>
  );
}

export default CategoriesNavbar;
