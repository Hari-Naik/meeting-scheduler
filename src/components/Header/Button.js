import React from "react";

const Button = ({ text, outlined }) => {
  return (
    <button
      className={`px-6 py-2 ${
        outlined
          ? "bg-transparent border-2 border-[#242938] text-[#242938]"
          : "bg-[#242938] text-white"
      } text-base font-semibold rounded`}>
      {text}
    </button>
  );
};

export default Button;
