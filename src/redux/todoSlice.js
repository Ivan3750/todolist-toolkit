import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: 1, name: "Test", isDone: true }],
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
      console.log(action);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTasks(state, action) {
      state.filter = action.payload.name;
    },
  changeDone(state, action) {
  state.tasks = state.tasks.map((task) =>
    task.id === action.payload
      ? { ...task, isDone: !task.isDone }
      : task
  );
}

  },
});

export const { addTask, deleteTask, filterTasks, changeDone } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
