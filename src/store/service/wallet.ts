import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";

import { WalletInterface } from "models/wallet.model";
import service from "./";
import { setSelectedWallet } from "store/selectedWallet";

export const walletAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query<WalletInterface[], void>({
      query: () => ({ url: "/wallet", method: "Get" }),
      providesTags: ["wallet"],
    }),
    postWallet: builder.mutation<
      WalletInterface,
      { name: string; financialUnitId: string }
    >({
      query: (data) => ({ url: "/wallet", method: "Post", data }),
      invalidatesTags: ["wallet"],
    }),
  }),
});

export const walletMiddleware: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (
      action.type === "service/executeQuery/fulfilled" &&
      action.meta.arg.endpointName === "getWallets"
    )
      dispatch(
        setSelectedWallet({
          ...getState().selectedWallet,
          ...action.payload.find(
            (item: WalletInterface) =>
              item._id === getState().selectedWallet._id
          ),
        })
      );

    return next(action);
  };

export const { useGetWalletsQuery, usePostWalletMutation } = walletAPI;
