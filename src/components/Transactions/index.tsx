import React from "react";
import { TransactionItem } from "components/items";
import { useAppSelector } from "store";
import { useGetTransactionsQuery } from "store/service/transaction";

const Transactions = () => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { data, isFetching } = useGetTransactionsQuery(
    {
      walletId: selectedWallet?._id || "",
    },
    { skip: !selectedWallet._id }
  );

  if (!data || isFetching) return null;
  return (
    <div className="mt-4">
      {data.map((item) => (
        <TransactionItem transaction={item} key={item._id} />
      ))}
    </div>
  );
};

export default Transactions;
