import { FC, FormEvent } from "react";
import { CONSTANTS } from "../constants/constants";
import TodoAddItemButtons from "./TodoAddItemButtons";

interface TodoAddItemProps {
  handleAddTodo: (e?: FormEvent) => void;
  newTodoText: string;
  handleAddTodoText: (text: string) => void;
}

const TodoAddItem: FC<TodoAddItemProps> = ({
  handleAddTodo,
  newTodoText,
  handleAddTodoText,
}) => {
  return (
    <div className="todo-add-container">
      <form onSubmit={handleAddTodo} className="todo-add-form">
        <input
          type="text"
          className="todo-input"
          value={newTodoText}
          onChange={(e) => handleAddTodoText(e.target.value)}
          placeholder={CONSTANTS.PLACEHOLDERS.TODO_ADD_ITEM}
          autoFocus
        />
        <TodoAddItemButtons handleAddTodoText={handleAddTodoText} />
      </form>
    </div>
  );
};

export default TodoAddItem;
