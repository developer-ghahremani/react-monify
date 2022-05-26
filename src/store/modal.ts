import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  sideBarMenu: boolean;
}

const initialState: ModalInterface = {
  sideBarMenu: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSidebarMenu: (state) => {
      return { sideBarMenu: !state.sideBarMenu };
    },
  },
});

export const { toggleSidebarMenu } = modal.actions;
export default modal;
