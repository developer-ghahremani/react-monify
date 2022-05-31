import { CategoryInrterface } from "./category.model";
import { SourceInterface } from "./source.model";
import { WalletInterface } from "./wallet.model";
export interface TransactionInterface {
  _id: string;
  amount: number;
  type: -1 | 1;
  userId: string;
  walletId: string;
  sourceId: SourceInterface;
  categoryId: CategoryInrterface;
  //   tags: [
  //     {
  //       _id: "6287de8d52f20b3130fc1724";
  //       name: "drug";
  //       userId: "6287afdbe648a1622f907699";
  //       walletId: "6287b081d92aa4925597abe1";
  //       createdAt: "2022-05-20T18:31:12.624Z";
  //       updateAt: "2022-05-20T18:31:12.624Z";
  //       __v: 0;
  //     }
  //   ];
  createdAt: Date;
  updatedAt: Date;
}
