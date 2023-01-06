import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    editTargetId: null,
  },
  reducers: {
    add: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    delete: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setEditedId: (state, action) => {
      state.editTargetId = action.payload;
    },
    edit: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload.changedTodo;
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
