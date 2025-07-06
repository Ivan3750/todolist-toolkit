import logo from './logo.svg';
import './App.css';
import ToDoList from "./components/ToDoList"
import Form from './components/Form';
import Filter from "./components/Filter"
function App() {
  return (
    <>
    <div className='w-[800px] mx-auto my-10 flex flex-col items-center'>

    <Form></Form>
    <Filter></Filter>
    <ToDoList></ToDoList>
    </div>
    </>
  );
}

export default App;
