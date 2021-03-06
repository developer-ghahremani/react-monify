import { useAppDispatch, useAppSelector } from "store";

import { BrowserRouter } from "react-router-dom";
import Pages from "pages";
import { SideBatMenu } from "components/layout";
import { setSelectedWallet } from "store/selectedWallet";
import { setUser } from "store/user";
import { useEffect } from "react";
import { useWhoAmIMutation } from "store/service/user";

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
      if (data.wallets && data.wallets[0])
        dispatch(setSelectedWallet(data.wallets[0]));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Pages />
      <SideBatMenu />
    </BrowserRouter>
  );
};

export default Monify;
