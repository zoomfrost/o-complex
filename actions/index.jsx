"use server";

import ProductCard from "@/components/ProductCard";

const pageSize = 6;

export const getProducts = async (pageNumber) => {
  const data = await fetch(
    `http://o-complex.com:1337/products?page=${pageNumber}&page_size=${pageSize}`,
    {
      method: "GET",
      body: null,
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const products = await data.json();
  return {
    products: products.products.map((product) => (
      <ProductCard key={product.id} {...product} />
    )),
    totalPages: Math.ceil(products.total / pageSize),
  };
};

export const postCartData = async (formData) => {
  console.log(formData);
  const data = await fetch(`http://o-complex.com:1337/order`, {
    method: "POST",
    body: formData,
    headers: {
      "content-type": "application/json",
    },
  });

  return data.json();
};

export const getReviews = async () => {
  const data = await fetch(`http://o-complex.com:1337/reviews`, {
    method: "GET",
    body: null,
    headers: {
      "content-type": "application/json",
    },
  });

  const reviews = await data.json();
  return reviews;
};
