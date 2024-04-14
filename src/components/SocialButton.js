import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialButton = ({ icon, text }) => {
  return (
    <button className="flex justify-center items-center gap-2 py-2 border-2 border-[#000] rounded-full">
      <FontAwesomeIcon icon={icon} />
      <span className="text-xs">{text}</span>
    </button>
  );
};

export default SocialButton;
