import AddWallet from "pages/Wallets/AddWallet";
import Auth from "pages/Auth";
import Category from "pages/Category";
import Home from "pages/Home";
import Sources from "pages/Sources";
import Transaction from "pages/Transaction";
import UserDetail from "pages/UserDetail";
import Wallets from "pages/Wallets";
import { pageNames } from "constant";

const routes: { path: string; element: JSX.Element }[] = [
  {
    path: pageNames.home,
    element: <Home />,
  },
  {
    path: pageNames.auth,
    element: <Auth />,
  },
  {
    path: pageNames.userDetail,
    element: <UserDetail />,
  },
  {
    path: pageNames.wallets.list,
    element: <Wallets />,
  },
  {
    path: pageNames.wallets.addWallet,
    element: <AddWallet />,
  },
  {
    path: pageNames.sources.list,
    element: <Sources />,
  },
  {
    path: pageNames.category.list,
    element: <Category />,
  },
  {
    path: pageNames.transaction.list,
    element: <Transaction />,
  },
];

export default routes;
