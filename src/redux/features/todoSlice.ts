import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TTodo {
  id: string;
  title: string;
  priority: string;
  description: string;
  isCompleted?: boolean;
}

export interface TInitialState {
  todos: TTodo[];
}

const initialState: TInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      if (task) {
        state.todos.sort((a, b) =>
          a.isCompleted === b.isCompleted ? 0 : a.isCompleted ? 1 : -1
        );
      }
    },
    setFiltering: (state, action: PayloadAction<string>) => {
      state.todos.find((todo) => todo.priority === action.payload);
    },
  },
});

export const { addTodo, removeTodo, toggleCompleted, setFiltering } =
  todoSlice.actions;
export default todoSlice.reducer;
