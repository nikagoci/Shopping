import React, { useEffect, useState } from "react";
import classes from "../Components/UI/AllCategory.module.css";
import Container from "../Components/UI/Container/Container";
import List from "../Components/UI/List/List";
import LoadingSpinner from "../Components/UI/Loading/LoadingSpinner";

function Electronics(props) {
  const [electronicsData, setElectronicsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchElectronicsData();
  }, []);

  const fetchElectronicsData = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );

      if (!response.ok) {
        throw new Error("error");
      }

      const data = await response.json();

      setElectronicsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const modalContent = (content) => {
    props.modalContent(content);
    
  };
  
  return (
    <div className={classes.midContainer}>
      <Container className={classes.lowContainer}>
        {isLoading && (
          <div className={classes.load}>
            <LoadingSpinner />
          </div>
        )}
        {error && <p className={classes.error}>Error About Electronics!</p>}
        <div className={classes.allCategories}>
          {electronicsData
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

export default Electronics;
