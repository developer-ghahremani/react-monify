import { WalletInterface } from "./wallet.model";

export interface CategoryInrterface {
  _id: string;
  name: string;
  type: 1 | -1;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  walletId: WalletInterface;
  userId: string;
  children: CategoryInrterface[];
}
