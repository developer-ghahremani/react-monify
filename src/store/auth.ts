import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  mobile?: string;
  step: "sendSMS" | "sendCode";
}

const initialState: AuthState = {
  step: "sendSMS",
};

export const auth = createSlice({
  initialState,
  name: "auth",
  reducers: {
    authChangeStep: (state, { payload }: PayloadAction<AuthState>) => {
      return { ...payload };
    },
  },
});

export const { authChangeStep } = auth.actions;
