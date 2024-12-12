import { FC } from "react";
import { CONSTANTS } from "../constants/constants";

interface TodoAddItemButtons {
  handleAddTodoText: (text: string) => void;
}

const TodoAddItemButtons: FC<TodoAddItemButtons> = ({ handleAddTodoText }) => {
  return (
    <div className="todo-add-form-actions">
      <button
        type="button"
        className="todo-add-cancel-btn"
        onClick={() => {
          handleAddTodoText("");
        }}
      >
        {CONSTANTS.CANCEL_BTN_LABEL}
      </button>
      <button type="submit" className="todo-add-confirm-btn">
        {CONSTANTS.ADD_BTN_LABEL}
      </button>
    </div>
  );
};

export default TodoAddItemButtons;
