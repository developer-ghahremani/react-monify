import store, { persistor } from "store";

import { AddSource } from "components/modals";
import Monify from "Monify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import { SideBatMenu } from "components/layout";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Monify />
        {/* <SideBatMenu /> */}
        <AddSource />
        <ToastContainer position="bottom-right" />
      </PersistGate>
    </Provider>
  );
};

export default App;
