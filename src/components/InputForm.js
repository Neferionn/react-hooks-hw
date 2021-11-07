import { useContext, useEffect, useRef, useState } from "react";
import { TodoListContext } from "./Provider";

const InputForm = () => {
  const [todos, setTodos] = useContext(TodoListContext);

  const [itemName, setItemName] = useState("");

  const todoInput = useRef();

  useEffect(() => {
    todoInput.current.focus();
  });

  const check = (item) => {
    const list = [...todos];
    if (list.find((i) => i.name === item)) {
      return true;
    }
    return false;
  };

  const addTodoItem = (e) => {
    e.preventDefault();
    if (!itemName) {
      alert("Enter item name");
    } else if (itemName.length > 40) {
      alert("Maximum characters 40");
    } else if (check(itemName)) {
      alert("Enter a unique name");
    } else {
      setTodos([...todos, { name: itemName, complete: false }]);
      setItemName("");
      todoInput.current.focus();
    }
  };

  return (
    <form className="border" onSubmit={addTodoItem}>
      <div className="input-group p-3">
        <input
          type="text"
          className="form-control"
          ref={todoInput}
          value={itemName}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          onClick={addTodoItem}
          className="btn btn-outline-primary"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default InputForm;
