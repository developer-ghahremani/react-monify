import Navbar from "./Navbar";
import React from "react";

type Props = { children: React.ReactNode };

const MainLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="lg:max-w-4xl lg:mx-auto mx-12">{props.children}</div>
    </div>
  );
};

export default MainLayout;
