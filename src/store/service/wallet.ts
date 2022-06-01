import { Middleware } from "@reduxjs/toolkit";
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
    getWallet: builder.query<WalletInterface, { walletId: string }>({
      query: ({ walletId }) => ({ url: `/wallet/${walletId}`, method: "Get" }),
      providesTags: ["wallet"],
    }),
    patchWallet: builder.mutation<
      WalletInterface,
      {
        walletId: string;
        name: string;
        color?: string;
        financialUnitId: string;
      }
    >({
      query: ({ walletId, ...data }) => ({
        url: `/wallet/${walletId}`,
        method: "Patch",
        data,
      }),
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
      (action.meta.arg.endpointName === "getWallets" ||
        action.meta.arg.endpointName === "patchWallet")
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

export const {
  useGetWalletsQuery,
  usePostWalletMutation,
  useGetWalletQuery,
  usePatchWalletMutation,
} = walletAPI;
