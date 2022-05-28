import { FinancialUnit } from "./financialUnit.model";

export interface WalletInterface {
  _id?: string;
  name?: string;
  userId?: string;
  financialUnitId?: FinancialUnit;
  color?: string;
  createAt?: Date;
  updatedAt?: Date;
}
