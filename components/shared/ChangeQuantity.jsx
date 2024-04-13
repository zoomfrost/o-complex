"use client";

import { ProductsContext } from "@/context/ProductsContext";

import React, { useContext, useEffect, useState } from "react";

const ChangeQuantity = ({ id }) => {
  const { inputQuantity, quantityOfProduct, incOrDecQuantity } =
    useContext(ProductsContext);

  const [inputValue, setInputValue] = useState(quantityOfProduct(id));
  useEffect(() => {
    inputQuantity(id, Number(inputValue));
  }, [inputValue]);
  return (
    <div className="flex between items-center w-full  text-white lowercase text-4xl gap-3 font-normal">
      <button
        onClick={() => {
          incOrDecQuantity(id, -1);
        }}
        className="button w-1/4 disabled:bg-red"
      >
        -
      </button>
      <input
        className="w-1/2 bg-primary text-center h-[68px] rounded-xl"
        type="text"
        name="quantity"
        value={quantityOfProduct(id)}
        onChange={(e) => {
          setInputValue(e.target.value.replace(/\D/g, ""));
        }}
      />
      <button
        onClick={() => {
          incOrDecQuantity(id, 1);
        }}
        className="button w-1/4"
      >
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
