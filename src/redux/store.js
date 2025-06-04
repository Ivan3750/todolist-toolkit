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
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistorStore = persistStore(store);
