import { configureStore } from "@reduxjs/toolkit";
import{ todolistReducer} from "./reducer"
export const store = configureStore({
    reducer:{
        todolist: todolistReducer
    }
})