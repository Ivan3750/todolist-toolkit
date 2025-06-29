import { useDispatch, useSelector } from "react-redux"
import { changeDone } from "../redux/todoSlice"
import { useEffect } from "react"
import { fetchTasksThunk, deleteTasksThunk } from "../redux/todoSlice"
import Err from "./Err"
import Loading from "./Loading"

const ToDoList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.todolist.tasks) /* отримуємо всі завдання з store */
  const err = useSelector((state) => state.todolist.err) /* отримуємо помилку з store */
  const isLoading = useSelector((state) => state.todolist.isLoading) /* отримуємо завантаження з store */
  console.log(isLoading)
  console.error("Err",err)

  useEffect(() => {
    dispatch(fetchTasksThunk())
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteTasksThunk(id))
  }

  return (
    <div className="flex flex-col gap-4 mt-6 w-full">
      {!err && !isLoading && tasks?.map((task) => (
        <div
          key={task.id}
          className={`flex justify-between items-center p-4 rounded-2xl border transition-all  ${
            task.isDone
              ? "bg-green-100 border-green-300"
              : "bg-white border-gray-300"
          }`}
        >
          <div className="flex items-center gap-4 w-full">
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => dispatch(changeDone(task.id))}
              className="h-5 w-5 accent-green-500"
            />
            <p
              className={`text-lg w-full break-words ${
                task.isDone ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.name}
            </p>
          </div>
          <button
            onClick={() => handleDelete(task.id)}
            className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl"
          >
            Видалити
          </button>
        </div>
      ))}

      {err && <Err></Err>}
      {isLoading && <Loading></Loading>}
    </div>
  )
}

export default ToDoList
