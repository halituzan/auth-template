import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const VerticalMenuItems = ({ open, item }) => {
  const navigate = useNavigate();
  return (
    <button
      className='my-1 p-2 rounded-md  w-full flex justify-start items-center hover:bg-slate-100/50 text-rose-600 hover:text-rose-600'
      onClick={() => {
        navigate(item.path);
      }}
    >
      <span className='mr-2'>
        <Icon icon={item.icon} fontSize={24} />
      </span>{" "}
      {open && item.label}
    </button>
  );
};

export default VerticalMenuItems;
