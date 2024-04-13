import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
      <Image
        src="./spinner.svg"
        alt="spinner"
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default Spinner;
