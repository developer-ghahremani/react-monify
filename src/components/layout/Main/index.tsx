import Navbar from "./Navbar";
import React from "react";

type Props = { children: React.ReactNode; title?: string };

const MainLayout = (props: Props) => {
  return (
    <div style={{ direction: "rtl" }}>
      <Navbar />
      <div className="lg:max-w-4xl lg:mx-auto mx-12 mt-12">
        <p className="text-3xl font-bold">{props.title}</p>
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
