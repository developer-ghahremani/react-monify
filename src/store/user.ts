import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserModel } from "./../models/user.model";

const initialState: UserModel = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { setUser: (state, action: PayloadAction<UserModel>) => {} },
});

export default userSlice;
