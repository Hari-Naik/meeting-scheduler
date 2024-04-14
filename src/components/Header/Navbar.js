import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex space-x-6 xl:space-x-10">
      <NavItem text="solutions" />
      <NavItem text="product" />
      <NavItem text="resources" />
      <NavItem text="Pricing" />
    </nav>
  );
};

export default Navbar;
