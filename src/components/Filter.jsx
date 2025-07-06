import { useDispatch } from "react-redux";
import { changeTypeFilter } from "../redux/filterSlice";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  const [selectOption, setSelectOption] = useState("");
  const handleSubmit = (value) => {
    setSelectOption(value)
    dispatch(changeTypeFilter(value));
    console.log("change to", value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-full bg-white rounded-2xl border-gray-200 transition-all mt-4"
    >
      <select
        name="type"
        id="type"
        value={selectOption}
        onChange={e => handleSubmit(e.target.value)}
      >
        <option value="all" selected={selectOption === "all"}>
          Всі
        </option>
        <option value="completed" selected={selectOption === "completed"}>
          Виконані
        </option>
        <option value="incompleted" selected={selectOption === "incompleted"}>
          Не виконані
        </option>
      </select>
    </form>
  );
};

export default Form;
