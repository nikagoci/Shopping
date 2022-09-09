import React from "react";
import CategoriesNavbar from "./CategoriesNavbar";
import { Outlet } from "react-router-dom";
import Container from "../../UI/Container/Container";

function Categories() {
  return (
    <Container>
      <CategoriesNavbar />
      <Outlet />
    </Container>
  );
}

export default Categories;
