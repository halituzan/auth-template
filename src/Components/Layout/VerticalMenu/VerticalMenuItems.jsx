import React from "react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

const VerticalMenuItems = ({ open, item, allTimeOpen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <button
      className={`my-1 p-2 rounded-md w-full flex justify-start items-center hover:font-bold hover:bg-rose-600 hover:text-white ${
        pathname === item.path
          ? "bg-rose-600 text-white font-bold"
          : "bg-transparent text-rose-600"
      }`}
      onClick={() => {
        navigate(item.path);
      }}
    >
      <span className='mr-2'>
        <Icon icon={item.icon} fontSize={24} />
      </span>{" "}
      {(allTimeOpen || open) && item.label}
    </button>
  );
};

export default VerticalMenuItems;
