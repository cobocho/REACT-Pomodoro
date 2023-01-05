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
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    delete: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.title !== action.payload;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    edit: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.title === action.payload.title) {
          todo.title = action.payload.newTitle;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setup: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
