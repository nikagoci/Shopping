import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Components/UI/Button/Button";
import Card from "../Components/UI/Card/Card";
import Container from "../Components/UI/Container/Container";
import classes from '../Components/UI/Products.module.css'

function Products() {
    const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const fetchSingleProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!response.ok) {
        throw new Error("error");
      }

      const data = await response.json();

      setProductsData(data);
    } catch (error) {
    
    }
  };

  const goBack = () => {
    navigate("/Category/AllCategory")
  }

  const seeMore = () => {
    navigate("/Category/" + productsData.category)
  }

  return (
    <React.Fragment>
    <Container className={classes.productContainer}>
      <div className={classes.leftSide}>
        <img src={productsData.image} alt={productsData.title} />
      </div>
      <Card className={classes.rightSide}>
        <h2>{productsData.title}</h2>
        <p>{productsData.description}</p>
        <h3>Category: {productsData.category}</h3>
        <h4>Price: {productsData.price}$</h4>
      </Card>
    </Container>
    <Container className={classes.btnKeeper}>
        <Button onClick={goBack}>Go Back</Button>
        <Button onClick={seeMore}>See Category</Button>
    </Container>
    </React.Fragment>
  );
}

export default Products;
