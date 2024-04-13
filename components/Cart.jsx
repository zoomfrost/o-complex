"use client";

import { useContext } from "react";
import AddedToCartProduct from "./AddedToCartProduct";
import Form from "./shared/Form";
import { ProductsContext } from "@/context/ProductsContext";

const Cart = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="bg-transparent max-w-[708px] flex flex-col gap-y-[30px] p-4 mb-12 mt-[120px] md:mt-[240px]">
      <h3 className="text-4xl font-normal text-center md:w-3/5">
        Добавленные товары
      </h3>

      {products.map((product) => (
        <AddedToCartProduct key={product.id} {...product} />
      ))}
      <Form cartProducts={products} />
    </div>
  );
};

export default Cart;
