import Navbar from "./Navbar";
import React from "react";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default MainLayout;
