import React from "react";

const PrimaryButton = ({ text, className }) => {
  return (
    <div
      className={`${
        className && className
      } bg-gradient-to-r from-rose-600 via-rose-500 to-rose-500 w-full rounded-xl p-2 flex justify-center items-center text-white font-bold`}
    >
      {text}
    </div>
  );
};

export default PrimaryButton;
