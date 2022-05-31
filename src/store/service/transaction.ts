import { TransactionInterface } from "./../../models/transaction.model";
import service from "./";

const transactionAPI = service.injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query<
      TransactionInterface[],
      { walletId: string }
    >({
      query: ({ walletId }) => ({
        url: `/transaction/${walletId}`,
        method: "Get",
      }),
      providesTags: ["source"],
    }),
    postTransaction: builder.mutation<
      TransactionInterface,
      {
        walletId: string;
        sourceId: string;
        categoryId: string;
        amount: number;
        type: -1 | 1;
      }
    >({
      query: (data) => ({ method: "Post", url: `/transaction`, data }),
      invalidatesTags: ["source", "transaction", "wallet"],
    }),
  }),
});

export const { useGetTransactionsQuery, usePostTransactionMutation } =
  transactionAPI;
