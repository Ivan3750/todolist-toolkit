import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { getToDosApi, deleteToDosApi,addToDosApi } from "../api/fetch"

const initialState = {
  tasks: [],
  filter: null,
}

export const fetchTasksThunk = createAsyncThunk("todo/fetchTasks", () =>
  getToDosApi()
)

export const deleteTasksThunk = createAsyncThunk("todo/deleteTasks", id =>
  deleteToDosApi(id)
)

export const addTasksThunk = createAsyncThunk("todo/addTasks", data =>
  addToDosApi(data)
)

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({ id: nanoid(), name: action.payload, isDone: false })
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    filterTasks(state, action) {
      state.filter = action.payload.name
    },
    changeDone(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, isDone: !task.isDone }
          : task
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
      .addCase(deleteTasksThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
      })
      .addCase(addTasksThunk.fulfilled, (state, action) => {
        state.tasks.push(action.payload)
      })
  },
})

export const { addTask, deleteTask, filterTasks, changeDone } = todoSlice.actions
export const todoReducer = todoSlice.reducer
