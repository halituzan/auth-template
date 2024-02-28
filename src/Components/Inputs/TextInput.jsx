import React from "react";

const TextInput = ({
  type = "text",
  value,
  changeHandle,
  label,
  id,
  placeholder,
  className,
}) => {
  return (
    <div className={`${className && className} flex flex-col items-start w-full`}>
      <label className='mb-1 font-bold text-slate-700' htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={changeHandle}
        placeholder={placeholder}
        className='bg-slate-200 w-full px-2 py-2 rounded-xl border border-transparent focus:outline-0 focus:border focus:border-rose-600'
      />
    </div>
  );
};

export default TextInput;
