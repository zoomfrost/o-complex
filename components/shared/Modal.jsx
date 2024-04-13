import React from "react";

const Modal = ({ isModalActive }) => {
  return (
    <>
      {isModalActive && (
        <div className="h-screen w-screen fixed bg-black/40 top-0 left-0 flex-center">
          <div className="p-5 rounded-xl flex flex-col items-center justify-around bg-transparent h-32  ">
            <h4 className="text-xl md:text-2xl">Благодарим за заказ!</h4>
            <p className="text-base md:text-lg">Мы скоро с вами свяжемся </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
