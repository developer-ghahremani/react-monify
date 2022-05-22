import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { auth } from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import service from "./service";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [service.reducerPath]: service.reducer,
    [auth.name]: auth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(service.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
