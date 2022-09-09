import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Categories from "./Components/Header/Hero/Categories";
import Navbar from "./Components/Header/Navbar/Navbar";
import Electronics from "./Pages/Electronics";
import AllCategory from "./Pages/AllCategory";
import Jewelery from "./Pages/Jewelery";
import WomenClothes from "./Pages/WomenClothes";
import MenClothes from "./Pages/MensClothes";
import Checkout from "./Pages/Checkout";
import Products from "./Pages/Products";
import { CartContextProvider } from "./Context/CartContext";

function App() {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [modalFinalContent, setModalFinalContent] = useState("");

  const inputGetter = (inputSearcher) => {
    setInputSearchValue(inputSearcher);
  };

  const modalContent = (content) => {
    setModalFinalContent((prevContent) =>
      prevContent ? content.concat(prevContent) : content
    );
  };

  return (
    <CartContextProvider>
      <Router>
        <Navbar
          modalFinalContent={modalFinalContent}
          onInputChange={inputGetter}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/Category/AllCategory" />} />
          <Route path="/Category" element={<Categories />}>
            <Route
              path="AllCategory"
              element={
                <AllCategory
                  modalContent={modalContent}
                  inputValue={inputSearchValue}
                />
              }
            />
            <Route
              path="Electronics"
              element={
                <Electronics
                  modalContent={modalContent}
                  input={inputSearchValue}
                />
              }
            />
            <Route
              path="Jewelery"
              element={
                <Jewelery
                  modalContent={modalContent}
                  input={inputSearchValue}
                />
              }
            />
            <Route
              path="MenClothes"
              element={
                <MenClothes
                  modalContent={modalContent}
                  input={inputSearchValue}
                />
              }
            />
            <Route
              path="WomenClothes"
              element={
                <WomenClothes
                  modalContent={modalContent}
                  input={inputSearchValue}
                />
              }
            />
          </Route>
          <Route
            path="/Checkout"
            element={<Checkout orders={modalFinalContent} />}
          />
          <Route path="/Products/:id" element={<Products />} />
          <Route path="*" element={<h1>Error 404. Page Not Found</h1>} />
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
