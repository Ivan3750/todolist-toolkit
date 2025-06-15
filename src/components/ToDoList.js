import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeDone } from "../redux/todoSlice";
import { getToDosApi } from "../api/getToDo";
import { useState, useEffect } from "react";

const ToDoList = () => {
  const [toDos, setToDos] = useState([])
  useEffect(() => {
    getToDosApi().then(data => { setToDos(data) })

  }, [])
  console.log(toDos)
  const tasks = useSelector((state) => state.todolist.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  return (
    <>
      {toDos.map((task) => {
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
