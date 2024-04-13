"use client";

import React, { createContext, useReducer } from "react";
import { produce } from "immer";
let savedProducts = null;
if (typeof window !== "undefined") {
  savedProducts = JSON.parse(localStorage.getItem("products"));
}

const initialState = {
  products: savedProducts ?? [],
};

export const ProductsContext = createContext({
  products: initialState.products,
  addToCart: () => {},
  changeQuantity: () => {},
});

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    produce((draftState, action) => {
      switch (action.type) {
        case "TO_EMPTY_CART":
          draftState.products = [];
          break;
        case "ADD_TO_CART":
          draftState.products.push(action.payload);
          localStorage.setItem("products", JSON.stringify(draftState.products));

          break;

        case "INCREMENT_OR_DECREMENT":
          const changedProduct = (draftState.products.filter(
            (product) => product.id === action.payload.id
          )[0].quantity += action.payload.count);

          if (changedProduct < 1) {
            draftState.products = draftState.products.filter(
              (product) => product.quantity > 0
            );
          }
          break;

        case "INPUT_QUANTITY":
          const changedByInputProduct = (draftState.products.filter(
            (product) => product.id === action.payload.id
          )[0].quantity = action.payload.count);

          if (changedByInputProduct < 1) {
            draftState.products = draftState.products.filter(
              (product) => product.quantity > 0
            );
          }
        default:
          break;
      }

      localStorage.setItem("products", JSON.stringify(draftState.products));
    }),
    initialState
  );

  const value = {
    products: state.products,
    quantityOfProduct: (id) => {
      return state.products.filter((product) => product.id === id)[0].quantity;
    },
    toEmptyCart: () => {
      dispatch({
        type: "TO_EMPTY_CART",
      });
    },
    addToCart: (product) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    },
    incOrDecQuantity: (id, count) => {
      dispatch({
        type: "INCREMENT_OR_DECREMENT",
        payload: { id, count },
      });
    },
    inputQuantity: (id, count) => {
      dispatch({
        type: "INPUT_QUANTITY",
        payload: { id, count },
      });
    },
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
