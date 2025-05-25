import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask } from "./actions";


const initialState = []

const reducerToDo = createReducer(initialState, {
    [addTask]: (state, action)=>{
        state.push(action.payload)
    },
    [deleteTask]: (state, action)=>{
        state.filter((task)=> task.id !== action.payload.id)
    }
})