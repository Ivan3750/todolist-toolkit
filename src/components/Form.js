import { useDispatch } from "react-redux";
import { addTask } from "../redux/todoSlice";

const Form = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target.elements.taskname.value)
        dispatch(addTask(e.target.elements.taskname.value))
    }
    return ( <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="taskname"/>
        <button >Додати завдання</button>
    </form>
    </> );
}
 
export default Form;