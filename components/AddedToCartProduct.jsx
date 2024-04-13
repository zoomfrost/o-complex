import React from "react";

const AddedToCartProduct = ({ title, quantity, price }) => {
  return (
    <div className="flex flex-row gap-5 justify-between items-center text-2xl md:w-3/5">
      <p>{title}</p>
      <p>{`x${quantity}`}</p>
      <p>{price * quantity}₽</p>
    </div>
  );
};

export default AddedToCartProduct;
