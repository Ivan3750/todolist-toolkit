import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { getToDosApi, deleteToDosApi,addToDosApi } from "../api/fetch" /* імпортуємо всі запити з файлу */

const initialState = { 
  tasks: [],
  filter: null,
  isLoading: false,
  err: false
}

export const fetchTasksThunk = createAsyncThunk("todo/fetchTasks", () => 
  /* fetchTasksThunk це функція яку ми викликажмо в dispath в компоненті для того щоб запустити action fetchTask для редусера todo */
  getToDosApi() /*  getToDosApi() функція яка робить запит на отримання завдання */
)

export const deleteTasksThunk = createAsyncThunk("todo/deleteTasks", id => 
  /* deleteTasksThunk це функція яку ми викликажмо в dispath в компоненті для того щоб запустити action deleteTasks для редусера todo */
  deleteToDosApi(id) /* deleteToDosApi(id) функція з параметром id яка видаляє завдання по id */
)

export const addTasksThunk = createAsyncThunk("todo/addTasks", data => 
    /* addTasksThunk це функція яку ми викликажмо в dispath в компоненті для того щоб запустити action addTasks для редусера todo */

  addToDosApi(data) /* addToDosApi(data) функція з параметром data яка додає завдання */
)

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: { /* синхроний редусер */
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
  extraReducers: (builder) => { /* асинхроний редусер */
    builder
      .addCase(fetchTasksThunk.fulfilled, (state, action) => {
        state.tasks = action.payload
      })
      .addCase(deleteTasksThunk.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
      })
      .addCase(addTasksThunk.fulfilled, (state, action) => {  /* дія додати завдання (успішна) */
        state.isLoading = false 
        state.tasks.push(action.payload)
      })
      .addCase(addTasksThunk.pending, (state, action) => { /* дія додати завдання (завантаження) */
        state.isLoading = true
      })
      .addCase(addTasksThunk.rejected, (state, action) => { /* дія додати завдання (помилка) */
             state.isLoading = false
        state.err = true
      })
  },
})

export const { addTask, deleteTask, filterTasks, changeDone } = todoSlice.actions
export const todoReducer = todoSlice.reducer
