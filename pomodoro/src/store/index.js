import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo-slice";
import { timerReducer } from "./timer-slice";

const store = configureStore({
  reducer: { todo: todoReducer, timer: timerReducer },
});

export default store;
