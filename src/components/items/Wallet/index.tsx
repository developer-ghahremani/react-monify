import { DeleteIcon, EditIcon } from "components/icons";

import { INumberFormat } from "components/general";
import { WalletInterface } from "models/wallet.model";
import { pageNames } from "constant";
import { stringifyUrl } from "query-string";
import { useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

type Props = {
  wallet: WalletInterface;
  onClick: (wallet: WalletInterface) => void;
};

const WalletItem = (props: Props) => {
  const selectedWallet = useAppSelector((s) => s.selectedWallet);
  const navigate = useNavigate();

  const hadnleClick = () => {
    props.onClick(props.wallet);
  };

  const handleEditWallet = () => {
    navigate(
      stringifyUrl({
        url: pageNames.wallets.addWallet,
        query: { walletId: props.wallet._id },
      })
    );
  };

  return (
    <div
      className={`rounded-2xl p-4 border cursor-pointer ${
        props.wallet._id === selectedWallet._id
          ? "border-primary"
          : "border-lightGray"
      }`}
      onClick={hadnleClick}>
      {/* <p>{props.wallet.name}</p>
      <div className="h-[1.5px] rounded-full my-2 bg-lightGray"></div> */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p>{props.wallet.name}</p>
          <INumberFormat value={props.wallet.amount} thousandSeparator />
        </div>
        <div className="flex flex-col">
          <EditIcon
            className="hover:scale-105 cursor-pointer"
            onClick={handleEditWallet}
          />
          <DeleteIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
