import { HomeIcon, MenuIcon } from "components/icons";

import { Link } from "react-router-dom";
import React from "react";
import UserMenu from "./UserMenu";
import { pageNames } from "constant";
import { toggleSidebarMenu } from "store/modal";
import { useAppDispatch } from "store";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleSidebarMenu());
  };

  return (
    <div className="bg-primary py-4">
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
        </div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
