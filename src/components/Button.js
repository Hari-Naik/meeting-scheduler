import React from "react";

const Button = ({ text, type, outlined, disabled }) => {
  return (
    <button
      type={type}
      className={`w-max px-4 py-2 rounded-full text-sm ${
        outlined
          ? "border-2 border-[#006bfc] text-[#006bfc]"
          : "bg-[#006bfc] text-white"
      } ${disabled ? "cursor-not-allowed animate-pulse" : ""}`}>
      {text}
    </button>
  );
};

export default Button;
