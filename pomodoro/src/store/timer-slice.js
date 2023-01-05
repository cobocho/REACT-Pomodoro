import { createSlice } from "@reduxjs/toolkit";
import counter from "../Utils/count";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: "00 : 00",
  },
  reducers: {
    changeTime: (state, actions) => {
      state.time = actions.payload;
    },
    count: (state) => {
      state.time = counter(state.time);
    },
  },
});

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;
