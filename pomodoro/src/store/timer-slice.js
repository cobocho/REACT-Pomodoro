import { createSlice } from "@reduxjs/toolkit";
import counter from "../Utils/counter";

import alramSound from "../assets/Chord.mp3";

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    settedTime: "",
    title: "",
    time: "00 : 00",
    active: false,
    interval: 0,
  },
  reducers: {
    setTimer: (state, actions) => {
      state.time = actions.payload.time;
      state.settedTime = actions.payload.time;
    },

    setEditData: (state, actions) => {
      state.settedTime = actions.payload.time;
      state.title = actions.payload.title;
    },

    count: (state) => {
      state.time = counter(state.time);
      if (state.time === "00 : 00") {
        const alram = new Audio(alramSound);
        alram.loop = false;
        alram.play();

        state.active = false;
        clearInterval(state.interval);
        state.time = state.settedTime;
      }
    },

    toggleActive: (state) => {
      state.active = !state.active;
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
