import { DeleteIcon, EditIcon } from "components/icons";

import { INumberFormat } from "components/general";
import { WalletInterface } from "models/wallet.model";

type Props = { wallet: WalletInterface };

const WalletItem = (props: Props) => {
  return (
    <div className="border-primary rounded-2xl p-4 border">
      {/* <p>{props.wallet.name}</p>
      <div className="h-[1.5px] rounded-full my-2 bg-lightGray"></div> */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p>{props.wallet.name}</p>
          <INumberFormat value={props.wallet.amount} thousandSeparator />
        </div>
        <div className="flex flex-col">
          <EditIcon className="cursor-pointer" />
          <DeleteIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
