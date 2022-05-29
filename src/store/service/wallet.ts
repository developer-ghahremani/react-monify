import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { WalletInterface } from "models/wallet.model";

export const walletAPI = (
  builder: EndpointBuilder<
    BaseQueryFn<
      { url: string; method: string | undefined; data?: any; params?: any },
      unknown,
      unknown,
      {},
      {}
    >,
    "wallet" | "source",
    "service"
  >
) => ({
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
});
