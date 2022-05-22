import { MenuIcon } from "components/icons";
import React from "react";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="bg-primary py-4">
      <div className="lg:mx-auto flex items-center justify-between max-w-5xl mx-8">
        <UserMenu />

        <MenuIcon fontSize={25} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
