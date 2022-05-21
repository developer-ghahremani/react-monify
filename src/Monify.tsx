import { BrowserRouter } from "react-router-dom";
import Pages from "pages";
import React from "react";

type Props = {};

const Monify = (props: Props) => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};

export default Monify;
