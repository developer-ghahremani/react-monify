import Auth from "pages/Auth";
import Home from "pages/Home";
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
];

export default routes;
