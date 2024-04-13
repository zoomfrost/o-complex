import { getProducts } from "@/actions";
import React from "react";

const ProductList = async () => {
  const products = await getProducts(1);

  return (
    <div className="grid gap-x-[35px] gap-y-[18px] md:gap-y-[26px] xl:gap-y-[42px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {products.products}
    </div>
  );
};

export default ProductList;
