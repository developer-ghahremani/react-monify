import { CategorizedTransaction } from "components/items";
import { groupBy } from "lodash";
import jMoment from "moment-jalaali";
import moment from "moment";
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

  const temp = groupBy([...data], (d) =>
    moment(d.createdAt).startOf("day").format()
  );
  return (
    <div className="mt-4">
      {Object.keys(temp).map((day) => (
        <CategorizedTransaction
          label={jMoment(day).format("jDD / jMM")}
          transactions={temp[day]}
        />
      ))}
    </div>
  );
};

export default Transactions;
