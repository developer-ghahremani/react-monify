import { MainLayout } from "components/layout";
import React from "react";
import { pageNames } from "constant";
import { useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      <p>residam</p>
    </MainLayout>
  );
};

export default Home;
