import { DownIcon, UpIcon } from "components/icons";

import { INumberFormat } from "components/general";
import { TransactionInterface } from "models/transaction.model";
import TransactionItem from "../Transaction";
import { useState } from "react";

type Props = {
  label: string;
  transactions: TransactionInterface[];
};

const CategorizedTransaction = (props: Props) => {
  const [expand, setExpand] = useState<boolean>(false);

  const toggleexpand = () => {
    setExpand((s) => !s);
  };

  return (
    <>
      <div
        className="bg-lightGray hover:scale-105 flex items-center justify-between px-4 py-1 my-2 text-lg duration-300 rounded-lg cursor-pointer"
        onClick={toggleexpand}>
        <p>{props.label}</p>
        <div className="flex items-center">
          <INumberFormat
            className="mx-2"
            thousandSeparator
            suffix={
              props.transactions.reduce(
                (pre, current) => current.amount * current.type + pre,
                0
              ) > 0
                ? "+"
                : "-"
            }
            value={Math.abs(
              props.transactions.reduce(
                (pre, current) => current.amount * current.type + pre,
                0
              )
            )}
          />
          {!expand ? <DownIcon /> : <UpIcon />}
        </div>
      </div>
      {expand &&
        props.transactions.map((trs, index) => (
          <div
            className="animate__animated animate__fadeInUp animate__faster"
            style={{ animationDelay: `${index / 4}s` }}>
            <TransactionItem transaction={trs} key={trs._id} />
          </div>
        ))}
    </>
  );
};

export default CategorizedTransaction;
