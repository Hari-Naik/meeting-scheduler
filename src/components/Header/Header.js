import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="bg-white">
        <div className="px-4 py-6 xl:px-20 flex items-center justify-between">
          <div className="flex space-x-6">
            {/* Fibery logo */}
            <Logo />
            {/* Navigation links */}
            <Navbar />
          </div>

          {/* User interaction elements */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a
              href="/login"
              className="text-base text-[#242938] hover:underline cursor-pointer transition">
              Log in
            </a>
            <Button text="Get a demo" outlined={true} />
            <Button text="Try for free" />
          </div>
          <div onClick={() => setShowMenu(true)} className="lg:hidden">
            <FontAwesomeIcon icon={faBars} className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      </header>

      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </>
  );
};

export default Header;
