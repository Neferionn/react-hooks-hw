import { useState } from "react";

const Item = ({ todo, idx, checkComplete, handleEditTodos, removeItem }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (idx) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, idx);
    } else {
      setEditValue(todo.name);
    }
  };

  if (onEdit) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          type="text"
          id="editValue"
          placeholder="Update your item..."
          className="form-control"
          name="editValue"
          required
          onChange={(e) => setEditValue(e.target.value)}
        />

        <button
          onClick={() => handleSave(idx)}
          className="btn btn-outline-success"
        >
          ✔️
        </button>
      </li>
    );
  } else {
    return (
      <li className="input-group  input-group d-flex justify-content-between align-items-center border px-3">
        <div className="input-group-text">
          <label htmlFor={idx} className={todo.complete ? "active" : ""}>
            <input
              type="checkbox"
              className="form-check-input m-1"
              id={idx}
              checked={todo.complete}
              onChange={() => {
                checkComplete(idx);
              }}
            />
            {todo.name}
          </label>
        </div>

        <div>
          <button
            disabled={todo.complete}
            onClick={handleOnEdit}
            className="btn btn-outline-warning m-1"
          >
            ✎
          </button>
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={removeItem}
          >
            ✖️
          </button>
        </div>
      </li>
    );
  }
};
export default Item;
