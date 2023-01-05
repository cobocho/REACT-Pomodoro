import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    delete: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.title !== action.payload;
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
