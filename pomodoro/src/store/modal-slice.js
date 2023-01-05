import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    visible: false,
  },
  reducers: {
    openModal: (state) => {
      state.visible = true;
    },
    closeModal: (state) => {
      state.visible = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
