import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getToDosApi } from "../api/getToDo";

const initialState = {
  tasks: [],
};

export const fetchTasksThunk = createAsyncThunk("todo/fetchTasks", ()=>
  getToDosApi()
)

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
 extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchTasksThunk.pending, (state, action) => {
/*         state.loading = true; */
      })
      .addCase(fetchTasksThunk.rejected, (state, action) => {
/*         state.loading = false;
        state.err = action.error.message; */
      });
  },
});

export const { addTask, deleteTask, filterTasks, changeDone } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
