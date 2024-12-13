import { FC, FormEvent } from "react";
import { TodoType } from "../types/todoType";
import { useTranslation } from "../utils/use-translations";
import TodoHeaderButtons from "./TodoHeaderButtons";

interface TodoHeaderProps {
  handleAddTodo: (e?: FormEvent) => void;
  newTodoText: string;
  handleAddTodoText: (text: string) => void;
  todos: TodoType[];
}

const TodoHeader: FC<TodoHeaderProps> = ({
  handleAddTodo,
  newTodoText,
  handleAddTodoText,
  todos,
}) => {
  const t = useTranslation();
  return (
    <div className="todo-add-container">
      <form onSubmit={handleAddTodo} className="todo-add-form">
        <input
          type="text"
          className="todo-input"
          value={newTodoText}
          onChange={(e) => handleAddTodoText(e.target.value)}
          placeholder={t("PLACEHOLDERS.TODO_ADD_ITEM")}
          autoFocus
        />
        <TodoHeaderButtons
          handleAddTodoText={handleAddTodoText}
          todos={todos}
        />
      </form>
    </div>
  );
};

export default TodoHeader;
