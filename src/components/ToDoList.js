import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeDone } from "../redux/todoSlice";
import { useState, useEffect } from "react";
import {fetchTasksThunk }from "../redux/todoSlice"
const ToDoList = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksThunk())
  }, [])
  const tasks = useSelector((state) => state.todolist.tasks);
  console.log(tasks)

  return (
    <>
      {tasks[0]?.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.name}</p>
            <input type="checkbox" checked={task.isDone} onChange={() => { dispatch(changeDone(task.id)) }} />
            <button onClick={() => dispatch(deleteTask(task.id))}>
              Видалити
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ToDoList;
