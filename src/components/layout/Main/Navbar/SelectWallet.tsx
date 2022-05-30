import { DownIcon, UpIcon } from "components/icons";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "store";

import { INumberFormat } from "components/general";
import { WalletInterface } from "models/wallet.model";
import { setSelectedWallet } from "store/selectedWallet";
import { useGetWalletsQuery } from "store/service";

const SelectWallet = () => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const { data: wallets, isFetching } = useGetWalletsQuery();
  const [walletMenu, setWalletMenu] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handlSelectWallet = () => {
    setWalletMenu((s) => !s);
  };

  const handleClick = (wallet: WalletInterface) => {
    dispatch(setSelectedWallet(wallet));
  };

  return (
    <div
      className="mx-4 animate__animated  cursor-pointer w-44"
      onClick={handlSelectWallet}>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="font-bold text-white">{selectedWallet.name}</p>
          <div className="flex">
            <INumberFormat
              className="text-sm text-white"
              value={selectedWallet.amount}
              thousandSeparator
            />
            <p className="mx-2 text-sm text-white">
              {selectedWallet.financialUnitId?.symbol}
            </p>
          </div>
        </div>
        {walletMenu ? (
          <UpIcon className="animate__animated animate__fadeIn" color="white" />
        ) : (
          <DownIcon
            className="animate__animated animate__fadeIn"
            color="white"
          />
        )}
      </div>
      {walletMenu && (
        <div className="animate__animated animate__fadeInDown absolute w-44 bg-lightGray p-2 rounded-lg">
          {wallets?.map((wallet) => (
            <div onClick={() => handleClick(wallet)}>
              <p>{wallet.name}</p>
              <div className="h-[1px] bg-darkGray my-1"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectWallet;
