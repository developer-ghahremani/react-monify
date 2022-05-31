import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { UserIcon } from "components/icons";
import { pageNames } from "constant";
import { setUser } from "store/user";
import { useI18Next } from "i18n";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { t } = useI18Next();
  const user = useAppSelector((s) => s.user);
  const dispatch = useAppDispatch();

  const options = [
    {
      title: t("general.userDetail"),
      onClick: () => {
        navigate(pageNames.userDetail);
      },
    },
    {
      title: t("general.logOut"),
      onClick: () => {
        dispatch(setUser({}));
        navigate(pageNames.auth);
      },
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
          className={`absolute w-44 bg-lightGray rounded-xl py-3 items-center flex flex-col animate__animated animate__fadeInDown animate__faster`}>
          <p>{user.firstName + " " + user.lastName}</p>
          <p>{user.mobile}</p>

          <div className="h-[1px] my-2 bg-darkGray mx-4 w-full"></div>
          {options.map((item, index, array) => (
            <div key={item.title} className="w-[100%]" onClick={item.onClick}>
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
