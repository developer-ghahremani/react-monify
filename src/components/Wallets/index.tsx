import React from "react";
import { WalletInterface } from "models/wallet.model";
import { WalletItem } from "components/items";
import { setSelectedWallet } from "store/selectedWallet";
import { useAppDispatch } from "store";
import { useGetWalletsQuery } from "store/service";

const Wallets = () => {
  const { isFetching, data } = useGetWalletsQuery();
  const dispatch = useAppDispatch();

  const handcleClickWallet = (wallet: WalletInterface) => {
    dispatch(setSelectedWallet(wallet));
  };

  return (
    <div>
      {isFetching ? (
        <p>loading</p>
      ) : (
        <div className="md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-4 mt-4">
          {data?.map((wallet) => (
            <WalletItem
              onClick={handcleClickWallet}
              wallet={wallet}
              key={wallet._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wallets;
