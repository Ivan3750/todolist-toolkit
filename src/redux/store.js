import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { getToDosApi } from "../api/getToDo";
import { useDispatch } from "react-redux";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk"

const dispatch = useDispatch();
const getToDosThunk = async () => {
  try {
    const result = await getToDosApi()
    dispatch({ type: 'GET_TODOS_SUCCESS', payload: result })
  } catch (error) {
    dispatch({ type: 'GET_TODOS_ERROR', payload: error })
  }
}

const persistConfig = {
  key: "todo",
  storage,
  version: 1,
  whitelist: ["todo"]
};

const persistTodoReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {
    todolist: persistTodoReducer
  },
  applyMiddleware(thunk)
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export const persistorStore = persistStore(store);
