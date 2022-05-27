import React from "react";
import { useGetWalletsQuery } from "store/service";

type Props = {};

const Wallets = (props: Props) => {
  const { isFetching, data } = useGetWalletsQuery();
  return (
    <div>
      {isFetching ? (
        <p>loading</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {data?.map((wallet) => (
            <div>
              <p>{wallet.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wallets;
