import { DownIcon, UpIcon } from "components/icons";
import React, { useState } from "react";

import { INumberFormat } from "components/general";
import { useAppSelector } from "store";

type Props = {};

const SelectWallet = (props: Props) => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const [walletMenu, setWalletMenu] = useState<boolean>(false);

  const handlSelectWallet = () => {
    setWalletMenu((s) => !s);
  };

  return (
    <div
      className="animate__animated animate__fadeInUp mx-4 cursor-pointer"
      onClick={handlSelectWallet}>
      <div className="flex items-center">
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
          <UpIcon
            className="animate__animated animate__fadeIn mr-16"
            color="white"
          />
        ) : (
          <DownIcon
            className="animate__animated animate__fadeIn mr-16"
            color="white"
          />
        )}
      </div>
      {walletMenu && (
        <div className=" animate__animated animate__fadeInDown absolute w-full h-8 bg-red-900"></div>
      )}
    </div>
  );
};

export default SelectWallet;
