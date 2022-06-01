import store, { persistor } from "store";

import AddCategory from "components/modals/AddCategory";
import { AddSource } from "components/modals";
import AddTransaction from "components/modals/AddTransaction";
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
        <AddTransaction />
        <AddSource />
        <AddCategory />
        <ToastContainer position="bottom-right" />
      </PersistGate>
    </Provider>
  );
};

export default App;
