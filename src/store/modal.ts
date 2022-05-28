import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  sideBarMenu: boolean;
  sourceModal: {
    isOpen: boolean;
    selectedSource: any | null;
  };
}

const initialState: ModalInterface = {
  sideBarMenu: false,
  sourceModal: {
    isOpen: false,
    selectedSource: null,
  },
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleSidebarMenu: (state) => {
      return { ...state, sideBarMenu: !state.sideBarMenu };
    },
    toggleAddSource: (state) => {
      return {
        ...state,
        sourceModal: {
          ...state.sourceModal,
          isOpen: !state.sourceModal.isOpen,
        },
      };
    },
    closeAddSource: (state) => {
      return {
        ...state,
        sourceModal: {
          isOpen: false,
          selectedSource: null,
        },
      };
    },
  },
});

export const { toggleSidebarMenu, toggleAddSource, closeAddSource } =
  modal.actions;
export default modal;
