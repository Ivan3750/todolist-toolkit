import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit"
import { getToDosApi, deleteToDosApi,addToDosApi, changeDoneToDosApi } from "../api/fetch" /* імпортуємо всі запити з файлу */

const statusFilter  = {
  all: "all",
  completed: "completed",
  incompleted: "incompleted"
}


const initialState = { 
  filterStatus: statusFilter.all,
}


const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: { /* синхроний редусер */
    changeTypeFilter(state, action) {
            switch (action.payload) {
        case "all":
          state.filterStatus = statusFilter.all;
          break;
        case "completed":
          state.filterStatus = statusFilter.completed;
          break;
        case "incompleted":
          state.filterStatus = statusFilter.incompleted;
          break;
            }
    }
    
  },

})

export const { changeTypeFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
