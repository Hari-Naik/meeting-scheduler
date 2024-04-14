import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Header/Logo";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../Header/Button";
import MenuItem from "./MenuItem";
import { MenuItems } from "../../data/data";

const Menu = ({ setShowMenu }) => {
  return (
    <div className="absolute lg:hidden top-0 left-0 z-[100] w-screen min-h-screen bg-white px-4">
      <header className="flex justify-between sticky top-0 z-50 bg-white py-6">
        <Logo />

        {/* close icon */}
        <FontAwesomeIcon
          onClick={() => setShowMenu(false)}
          icon={faXmark}
          className="h-6"
        />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:items-center gap-4 mt-4">
        <Button text="Try for free" />
        <Button text="Get a demo" outlined={true} />
        <a
          href="/login"
          className="text-base text-[#242938] hover:underline cursor-pointer transition text-center">
          Log in
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 pb-10">
        <MenuItem menuItem={MenuItems[0]} />
        <div className="flex flex-col gap-4">
          {MenuItems.slice(1, 3).map(item => (
            <MenuItem key={item.title} menuItem={item} />
          ))}
        </div>
        {MenuItems.slice(3).map(item => (
          <MenuItem key={item.title} menuItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
