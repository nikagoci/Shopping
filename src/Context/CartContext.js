import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const CartContext = createContext();

const initialState = {
    items: [],
    totalPrice: 0,
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const addToCart = (item) => {
        dispatch({type: "ADD_TO_CART", payload: item})
    }

    const calculateTotalPrice = (price) => {
        dispatch({type: "CALCULATE_TOTAL_PRICE", payload: price})
    }

    const removeTotalPrice = (price) => {
        dispatch({type: "REMOVE_TOTAL_PRICE", payload: price})
    }


    const removeFromCart = (title) => {
        dispatch({type: "REMOVE_FROM_CART", payload: title})
    }

    const value = {
        items: state.items,
        totalPrice: state.totalPrice,
        addToCart,
        calculateTotalPrice,
        removeFromCart,
        removeTotalPrice
    };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
