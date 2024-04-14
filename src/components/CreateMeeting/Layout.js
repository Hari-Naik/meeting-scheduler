import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="fixed top-0 z-50 w-full h-full bg-black/60 md:px-4 md:py-6 xl:px-20 overflow-hidden">
      <CloseIcon />
      <div className="relative max-w-3xl mx-auto h-full md:h-[70vh] bg-white rounded shadow-md md:mt-10 flex flex-col md:flex-row">
        <CloseIcon textColor mdHidden />
        {children}
      </div>
    </div>
  );
};

const CloseIcon = ({ textColor, mdHidden }) => {
  return (
    <div
      className={`w-full ${
        mdHidden ? "md:hidden flex" : "hidden md:flex"
      } items-center justify-end p-2`}>
      <FontAwesomeIcon
        icon={faXmark}
        className={`h-6 ${textColor ? "" : "text-white"} cursor-pointer`}
      />
    </div>
  );
};

export default Layout;
