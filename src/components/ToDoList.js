import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/todoSlice";

const ToDoList = () => {
  const tasks = useSelector((state) => state.todolist.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  return (
    <>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.name}</p>
            <input type="checkbox" checked={task.isDone} />
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
