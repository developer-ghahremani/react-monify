import Monify from "Monify";
import { Provider } from "react-redux";
import React from "react";
import store from "store";

const App = () => {
  return (
    <Provider store={store}>
      <Monify />
    </Provider>
  );
};

export default App;
