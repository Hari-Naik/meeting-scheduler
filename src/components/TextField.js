import React from "react";

const TextField = ({ label, id, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="text-xs text-[#242938] font-semibold">
        {label}
      </label>
      <textarea
        id={id}
        cols="20"
        value={value}
        onChange={onChange}
        className="outline-none border-2 border-gray-300 w-full max-w-md rounded-md p-2"></textarea>
    </div>
  );
};

export default TextField;
