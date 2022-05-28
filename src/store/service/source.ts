import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const sourceAPI = (
  builder: EndpointBuilder<
    BaseQueryFn<
      { url: string; method: string | undefined; data?: any; params?: any },
      unknown,
      unknown,
      {},
      {}
    >,
    "wallet",
    "service"
  >
) => ({
  getSources: builder.query<[], { walletId: string }>({
    query: ({ walletId }) => ({
      method: "Get",
      url: `/source/${walletId}`,
    }),
  }),
});
