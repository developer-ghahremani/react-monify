import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { WalletInterface } from "./../models/wallet.model";

const initialState: WalletInterface = {};

const selectedWallet = createSlice({
  initialState,
  name: "selectedWallet",
  reducers: {
    setSelectedWallet: (state, action: PayloadAction<WalletInterface>) => {
      return action.payload;
    },
  },
});
//
export const { setSelectedWallet } = selectedWallet.actions;
export default selectedWallet;
