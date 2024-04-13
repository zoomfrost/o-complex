"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { getProducts } from "@/actions";

let page = 2;

const LoadMore = () => {
  const { ref, inView } = useInView();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);

      const delay = 500;

      const timeoutId = setTimeout(() => {
        getProducts(page).then((res) => {
          if (page >= res.totalPages) {
            setIsFinished(true);
          }
          setProducts([...products, ...res.products]);
          page++;
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, products, isLoading]);
  return (
    <>
      <div className="flex-center mt-[42px]">
        <div className="grid gap-x-[35px] gap-y-[18px] md:gap-y-[26px] xl:gap-y-[42px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {products}
        </div>
      </div>

      {!isFinished && (
        <div className="flex-center w-full" ref={ref}>
          {isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={150}
              height={150}
              className="object-contain"
            />
          )}
        </div>
      )}
    </>
  );
};

export default LoadMore;
