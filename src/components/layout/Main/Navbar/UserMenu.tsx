import React, { useState } from "react";

import { UserIcon } from "components/icons";
import { useAppSelector } from "store";
import { useI18Next } from "i18n";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useI18Next();
  const user = useAppSelector((s) => s.user);

  const options = [
    {
      title: t("general.userDetail"),
      onClick: () => {},
    },
    {
      title: t("general.logOut"),
      onClick: () => {},
    },
  ];

  const toggleMenu = () => {
    setShowMenu((s) => !s);
  };

  return (
    <div>
      <UserIcon
        color={showMenu ? "gray" : "white"}
        fontSize={25}
        onClick={toggleMenu}
        className={`cursor-pointer ${showMenu ? "bg-white rounded-full" : ""}`}
      />
      {showMenu && (
        <div
          className={`absolute w-44 animate__animated animate__fadeInDown bg-lightGray rounded-xl animate__faster py-3 items-center flex flex-col`}>
          <p>{user.firstName + " " + user.lastName}</p>
          <p>{user.mobile}</p>

          <div className="h-[1px] my-2 bg-darkGray mx-4 w-full"></div>
          {options.map((item, index, array) => (
            <div key={item.title} className="w-[100%]">
              <p className="text-center cursor-pointer">{item.title}</p>
              {index !== array.length - 1 && (
                <div className="h-[2px] my-2 bg-white rounded-full mx-4"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
