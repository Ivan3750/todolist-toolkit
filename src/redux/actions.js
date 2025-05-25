import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("add")
export const deleteTask = createAction("delete", function prepare(id) {
  return {
    payload: {
      id
    },}
  })
export const filterTasks = createAction("filterTasks", function prepare(name) {
  return {
    payload: {
      name
    },}
  })
