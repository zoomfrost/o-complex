"use client";

import { postCartData } from "@/actions";
import { ProductsContext } from "@/context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import Modal from "./Modal";

const Form = ({ cartProducts }) => {
  const { toEmptyCart } = useContext(ProductsContext);
  const [savedPhone, setSavedPhone] = useState(null);
  useEffect(() => {
    setSavedPhone(localStorage.getItem("phone"));
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();

  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    clearErrors("cart");
  }, [toEmptyCart]);

  const onSubmit = async (data) => {
    const formattedProductArr = cartProducts.map((product) => {
      return { quantity: product.quantity, id: product.id };
    });
    const formData = { phone: data.phone, cart: formattedProductArr };

    if (formData.cart.length === 0) {
      setError("cart");
      return;
    }
    await postCartData(formData).then(() => {
      setIsModalActive(true);
      toEmptyCart();
      localStorage.clear();
      setValue("phone", "");
      setTimeout(() => {
        setIsModalActive(false);
      }, 3000);
    });
  };

  return (
    <>
      {errors.cart && (
        <p className="text-lg pl-3 text-red-500">Корзина пуста</p>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-x-[17px] gap-y-[9px] w-full"
      >
        <InputMask
          defaultValue={savedPhone ?? ""}
          mask="+7 (999)-999-99-99"
          placeholder="Номер телефона"
          className={`bg-primary w-full  h-[68px] text-white rounded-xl text-4xl p-3 ${
            errors.phone && "border-red-500 border-2"
          }`}
          type="tel"
          {...register("phone", {
            required: true,
            onChange: (e) => {
              localStorage.setItem("phone", e.target.value);
            },
            pattern: /^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
          })}
        />
        <button className="button md:w-3/5" type="submit">
          Заказать
        </button>
      </form>{" "}
      <Modal isModalActive={isModalActive} />
    </>
  );
};

export default Form;
