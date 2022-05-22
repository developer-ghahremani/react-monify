import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { BrowserRouter } from "react-router-dom";
import Pages from "pages";
import { setUser } from "store/user";
import { useWhoAmIMutation } from "store/service";

const Monify = () => {
  const user = useAppSelector((s) => s.user);
  const [whoAmI] = useWhoAmIMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.token) getUserByToken();
  }, [user.token]);

  const getUserByToken = async () => {
    try {
      const data = await whoAmI().unwrap();
      dispatch(setUser({ ...data, token: user.token }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};

export default Monify;
