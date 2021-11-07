import { createContext, useState } from "react";

export const TodoListContext = createContext();

export const Provider = (props) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoListContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoListContext.Provider>
  );
};
