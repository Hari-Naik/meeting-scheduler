import React from "react";

const Input = ({ type, label, placeholder, value, onChange, notRequired }) => {
  return (
    <>
      <label htmlFor={label} className="text-xs text-[#242938] font-semibold">
        {label} {!notRequired && "*"}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={notRequired ? false : true}
        className="p-2 border-2 border-gray-300 rounded-md w-full max-w-md outline-none"
      />
    </>
  );
};

export default Input;
