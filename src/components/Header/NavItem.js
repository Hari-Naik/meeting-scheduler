import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavItem = ({ text }) => {
  return (
    <a
      href={`/${text.toLowerCase()}`}
      className={`text-[#242938] ${
        text.toLowerCase() === "pricing"
          ? "hover:underline hover:opacity-1"
          : "hover:opacity-[0.7]"
      } font-semibold capitalize flex items-center gap-2`}>
      {text}
      {text.toLowerCase() !== "pricing" && (
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-xs text-gray-300"
        />
      )}
    </a>
  );
};

export default NavItem;
