import { WalletInterface } from "./wallet.model";

export interface UserModel {
  firstName?: string;
  lastName?: string;
  _id?: string;
  mobile?: string;
  createdAt?: Date;
  token?: string;
  wallets?: WalletInterface[];
}
