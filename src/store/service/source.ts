import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { SourceInterface } from "models/source.model";
import { SourceTypeEnum } from "constant";

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
  postSource: builder.mutation<
    SourceInterface,
    {
      name: string;
      type: SourceTypeEnum;
      bankAccountNumber?: string;
      bankCartNumber?: string;
      initialAmount?: number;
      expiredDate?: string;
      code?: string;
      icon?: string;
      note?: string;
      walletId: string;
    }
  >({
    query: (data) => ({ url: "/source", method: "Post", data }),
  }),
});