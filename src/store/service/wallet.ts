import { WalletInterface } from "models/wallet.model";
import service from "./";

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

export const { useGetWalletsQuery, usePostWalletMutation } = walletAPI;
