import Auth from "pages/Auth";
import Home from "pages/Home";
import Sources from "pages/Sources";
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
    path: pageNames.wallets,
    element: <Wallets />,
  },
  {
    path: pageNames.sources,
    element: <Sources />,
  },
];

export default routes;
