import React from "react";

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img src="/images/logo1.svg" alt="Fibery" />
      <img src="/images/logo.svg" alt="Fibery" className="h-5 -mt-4" />
      <span className="text-sm text-[#13cf14] hover:underline cursor-pointer ml-2">
        +AI Now
      </span>
    </a>
  );
};

export default Logo;
