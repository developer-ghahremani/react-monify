import Auth from "pages/Auth";
import Home from "pages/Home";
import UserDetail from "pages/UserDetail";
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
];

export default routes;
