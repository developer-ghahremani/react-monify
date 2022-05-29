import { WalletInterface } from "models/wallet.model";
export interface SourceInterface {
  name: string;
  type: string;
  initialAmount: number;
  amount: number;
  walletId: WalletInterface;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
