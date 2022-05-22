import store, { persistor } from "store";

import Monify from "Monify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Monify />
        <ToastContainer position="bottom-right" />
      </PersistGate>
    </Provider>
  );
};

export default App;
