import { createReducer, nanoid } from "@reduxjs/toolkit";
import { addTask, deleteTask } from "./actions";


const initialState = {
    tasks: [],
    filter: ""
}

export const todolistReducer = createReducer(initialState, (builder) =>{
    builder.addCase(addTask, (state, action) => {
        console.log("before:", state)
        state.tasks.push({id: nanoid(), name: action.payload, isDone: false})
        console.log(state.tasks)
    })
    builder.addCase(deleteTask, (state, action) => {
        state.tasks = state.tasks.filter((task)=> task.id !== action.payload.id)
    })
    builder.addCase(filterTasks, (state, action)=>{
        state.filter = action.payload.name
    })
})