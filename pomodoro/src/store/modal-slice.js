import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    mode: "none",
    visible: false,
  },
  reducers: {
    openModal: (state) => {
      state.visible = true;
    },
    closeModal: (state) => {
      state.visible = false;
    },
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
