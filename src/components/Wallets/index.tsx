import React from "react";
import { WalletItem } from "components/items";
import { useGetWalletsQuery } from "store/service";

const Wallets = () => {
  const { isFetching, data } = useGetWalletsQuery();
  return (
    <div>
      {isFetching ? (
        <p>loading</p>
      ) : (
        <div className="md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-4 mt-4">
          {data?.map((wallet) => (
            <WalletItem wallet={wallet} key={wallet._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wallets;
