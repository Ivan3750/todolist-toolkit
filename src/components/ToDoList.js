import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/actions";

const ToDoList = () => {
  const tasks = useSelector((state) => state.todolist.tasks);
  const filter = useSelector((state) => state.todolist.filter);
  console.log(tasks);
  const dispatch = useDispatch();

  const filteredTask = tasks.filter((task)=> task.name.toLowerCase() !== filter.toLowerCase())
  return (
    <>
    
    

      {filteredTask.map((task) => {
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
