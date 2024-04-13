"use client";

import { ProductsContext } from "@/context/ProductsContext";
import { useContext } from "react";
import ChangeQuantity from "./ChangeQuantity";

const BuyButton = ({ title, price, id }) => {
  const { addToCart, products } = useContext(ProductsContext);
  const isAdded = products.find((product) => product.id === id);

  return (
    <>
      {isAdded ? (
        <ChangeQuantity id={id} />
      ) : (
        <button
          onClick={() => addToCart({ title, quantity: 1, price, id })}
          className="button"
          type="button"
        >
          Купить
        </button>
      )}
    </>
  );
};

export default BuyButton;
