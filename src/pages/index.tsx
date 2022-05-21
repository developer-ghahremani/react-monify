import { Route, Routes } from "react-router-dom";

import routes from "routes";

const Pages = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  );
};

export default Pages;
