import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: 1, name: "Test", isDone: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({ id: nanoid(), name: action.payload, isDone: false });
      console.log(state.tasks);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    filterTasks(state, action) {
      state.filter = action.payload.name;
    },
  },
});

export const { addTask, deleteTask, filterTasks } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
