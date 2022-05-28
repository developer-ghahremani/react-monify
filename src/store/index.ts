import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { auth } from "./auth";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import selectedWallet from "./selectedWallet";
import service from "./service";
import storage from "redux-persist/lib/storage";
import userSlice from "./user";

const reducers = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [service.reducerPath]: service.reducer,
  [auth.name]: auth.reducer,
  [modal.name]: modal.reducer,
  [selectedWallet.name]: selectedWallet.reducer,
});

const reducer = persistReducer(
  {
    key: "root",
    blacklist: [service.reducerPath, auth.name, modal.name],
    storage,
  },
  reducers
);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(service.middleware),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
