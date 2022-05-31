import { INumberFormat } from "components/general";

import { TransactionInterface } from "models/transaction.model";

type Props = {
  transaction: TransactionInterface;
};

const TransactionItem = (props: Props) => {
  return (
    <div
      className={`flex items-center justify-between border px-4 py-2 rounded-lg my-2 ${
        props.transaction.type > 0 ? "border-green-700 " : "border-red-700"
      }`}>
      <div className="flex flex-col">
        <p>{props.transaction.categoryId.name}</p>
        <p>{props.transaction.sourceId.name}</p>
      </div>
      <div
        className={`flex items-center font-bold ${
          props.transaction.type > 0 ? "text-green-700 " : "text-red-700"
        }`}>
        <INumberFormat value={props.transaction.amount} thousandSeparator />
        <p>{props.transaction.type < 0 ? "-" : "+"}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
