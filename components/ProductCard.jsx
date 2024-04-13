import Image from "next/image";

import BuyButton from "./shared/BuyButton";

const ProductCard = ({ image_url, id, title, description, price }) => {
  return (
    <div className="flex flex-col bg-transparent max-w-[300px] rounded-lg py-2 px-[10px] h-[812px] items-center">
      <div className="w-full ">
        <Image
          src={image_url}
          alt="product image"
          className="object-contain h-[280px]"
          width={360}
          height={280}
        />
      </div>

      <div className="w-full h-full flex flex-col ">
        <h5 className="text-center lowercase text-4xl font-normal truncate mb-2 mt-2">
          {title}
        </h5>
        <div className="flex-1">
          <p className="text-2xl line-clamp-6">{description}</p>
        </div>

        <p className=" text-center text-4xl mb-8 mt-1">Цена: {price}₽</p>

        <BuyButton title={title} price={price} id={id} />
      </div>
    </div>
  );
};

export default ProductCard;
