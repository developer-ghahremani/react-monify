import Monify from "Monify";
import { Provider } from "react-redux";
import React from "react";
import { ToastContainer } from "react-toastify";
import store from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Monify />
      <ToastContainer position="bottom-right" />
    </Provider>
  );
};

export default App;
