import { createSlice } from "@reduxjs/toolkit";
import counter from "../Utils/count";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    active: false,
    time: "00 : 00",
    interval: 0,
  },
  reducers: {
    setTimer: (state, actions) => {
      state.time = actions.payload;
    },

    toggleActive: (state) => {
      state.active = !state.active;
    },

    count: (state) => {
      state.time = counter(state.time);
    },

    setCustomInterval: (state, actions) => {
      state.interval = actions.payload;
    },

    clearCustomInterval: (state) => {
      clearInterval(state.interval);
    },

    resetTimer: (state) => {
      clearInterval(state.interval);
      state.time = "00 : 00";
      state.active = false;
    },
  },
});

export const timerReducer = timerSlice.reducer;
export const timerActions = timerSlice.actions;
