import { HomeIcon, MenuIcon } from "components/icons";
import { useAppDispatch } from "store";

import React, { useEffect, useState } from "react";
import SelectWallet from "./SelectWallet";
import UserMenu from "./UserMenu";
import { pageNames } from "constant";
import { toggleSidebarMenu } from "store/modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200
        ? setStickyClass(
            "fixed top-0 left-0 z-50 w-full animate__animated animate__fadeInDown"
          )
        : setStickyClass("block");
    }
  };

  const handleToggleMenu = () => {
    dispatch(toggleSidebarMenu());
  };

  return (
    <div className={`bg-primary py-4 ${stickyClass}`}>
      <div className="lg:mx-auto flex items-center justify-between max-w-5xl mx-8">
        <div className="flex items-center">
          <MenuIcon
            fontSize={25}
            className="cursor-pointer"
            color="white"
            onClick={handleToggleMenu}
          />
          <Link to={pageNames.home}>
            <HomeIcon
              className="mx-4 cursor-pointer"
              color="white"
              fontSize={22}
            />
          </Link>
          <SelectWallet />
        </div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
