import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timer: "00 : 00",
  },
  reducers: {
    setTimer: (state, actions) => {
      console.log("setting");
      state.timer = actions.payload;
    },
  },
});

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;
