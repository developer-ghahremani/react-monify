import { CategoryInrterface } from "./../models/category.model";
import { SourceInterface } from "./../models/source.model";
import { TransactionInterface } from "models/transaction.model";
import { createSlice } from "@reduxjs/toolkit";

interface ModalInterface {
  sideBarMenu: boolean;
  sourceModal: {
    isOpen: boolean;
    selectedSource: SourceInterface | null;
  };
  categoryModal: {
    isOpen: boolean;
    selectedCategory: CategoryInrterface | null;
  };
  transactionModal: {
    isOpen: boolean;
    selectedTransaction: TransactionInterface | null;
  };
}

const initialState: ModalInterface = {
  sideBarMenu: false,
  sourceModal: {
    isOpen: false,
    selectedSource: null,
  },
  categoryModal: {
    isOpen: false,
    selectedCategory: null,
  },
  transactionModal: {
    isOpen: false,
    selectedTransaction: null,
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
    toggleCategoryModal: (state) => {
      return {
        ...state,
        categoryModal: {
          ...state.categoryModal,
          isOpen: !state.categoryModal.isOpen,
        },
      };
    },
    toggleTransactionModal: (state) => {
      return {
        ...state,
        transactionModal: {
          ...state.transactionModal,
          isOpen: !state.transactionModal.isOpen,
        },
      };
    },
  },
});

export const {
  toggleSidebarMenu,
  toggleAddSource,
  closeAddSource,
  toggleCategoryModal,
  toggleTransactionModal,
} = modal.actions;
export default modal;
