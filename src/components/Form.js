import { useDispatch } from "react-redux"
import { addTasksThunk } from "../redux/todoSlice"

const Form = () => {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
      dispatch(addTasksThunk({ name: e.target.elements.taskname.value, isDone: false }))
      e.target.elements.taskname.value = ""
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-full bg-white rounded-2xl border-gray-200 transition-all"
    >
      <input
        type="text"
        name="taskname"
        className="flex-1 px-4 py-2 rounded-xl border h-[50px] border-gray-300 focus:outline-none"
        placeholder="Назва"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 active:scale-95 transition-all text-white px-6 py-2 rounded-xl "
      >
        Додати
      </button>
    </form>
  )
}

export default Form
