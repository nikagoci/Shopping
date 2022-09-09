import React, { useState, useEffect } from "react";
import classes from "../Components/UI/AllCategory.module.css";
import Container from "../Components/UI/Container/Container";
import List from "../Components/UI/List/List";
import LoadingSpinner from '../Components/UI/Loading/LoadingSpinner'

function WomenClothes(props) {
  const [womenClothingData, setWomenClothingData] = useState([]);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchWomenClothing();
  }, []);

  const fetchWomenClothing = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's%20clothing"
      );

      if (!response.ok) {
        throw new Error("error");
      }

      const data = await response.json();

      setWomenClothingData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const modalContent = (content) => {
    props.modalContent(content);
  };

  return (
    <div className={classes.midContainer}>
    <Container className={classes.lowContainer}>
      {isLoading && <div className={classes.load}><LoadingSpinner /></div>}
      {error && <p className={classes.error}>Error About Women's Clothing</p>}
      <div className={classes.allCategories}>
        {womenClothingData
          .filter((value) => {
            if (props.input === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(props.input.toLowerCase())
            ) {
              return value;
            }
          })
          .map((electronic, index) => {
            return (
              <List
                modalContent={modalContent}
                key={index}
                title={electronic.title}
                price={electronic.price}
                img={electronic.image}
                id={electronic.id}
              />
            );
          })}
      </div>
    </Container>
    </div>
  );
}

export default WomenClothes;
