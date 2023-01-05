import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todo-slice";
import { timerReducer } from "./timer-slice";
import { modalReducer } from "./modal-slice";

const store = configureStore({
  reducer: { todo: todoReducer, timer: timerReducer, modal: modalReducer },
});

export default store;
