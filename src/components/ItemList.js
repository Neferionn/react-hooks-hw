import { useContext } from "react";
import { TodoListContext } from "./Provider";
import Item from "./Item";

const ItemList = () => {
  const [todos, setTodos] = useContext(TodoListContext);

  const switchComplete = (idx) => {
    const list = [...todos];
    list.forEach((todo, index) => {
      if (index === idx) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(list);
  };

  const handleEditTodos = (editValue, idx) => {
    const list = [...todos];
    list.forEach((todo, index) => {
      if (index === idx) {
        todo.name = editValue;
      }
    });
    setTodos(list);
  };

  const deleteItem = (idx) => {
    const list = [...todos];
    list.splice(idx, 1);
    setTodos(list);
  };

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <Item
          todo={todo}
          key={index}
          idx={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
          removeItem={deleteItem}
        />
      ))}
    </ul>
  );
};
export default ItemList;
