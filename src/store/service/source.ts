import { SourceInterface } from "models/source.model";
import { SourceTypeEnum } from "constant";
import service from "./";

const sourceAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getSources: builder.query<SourceInterface[], { walletId: string }>({
      query: ({ walletId }) => ({
        method: "Get",
        url: `/source/${walletId}`,
      }),
      providesTags: ["source"],
    }),
    postSource: builder.mutation<
      SourceInterface,
      {
        name: string;
        type: SourceTypeEnum;
        bankAccountNumber?: string;
        bankCartNumber?: string;
        initialAmount: number;
        expiredDate?: string;
        code?: string;
        icon?: string;
        note?: string;
        walletId: string;
      }
    >({
      query: (data) => ({ url: "/source", method: "Post", data }),
      invalidatesTags: ["source", "wallet"],
    }),
  }),
});

export const { useGetSourcesQuery, usePostSourceMutation } = sourceAPI;
