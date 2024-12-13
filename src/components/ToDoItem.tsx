import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC } from "react";
import { CONSTANTS } from "../constants/constants";
import { TodoType } from "../types/todoType";
import { useTranslation } from "../utils/use-translations";

interface TodoItemProps {
  todo: TodoType;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  const t = useTranslation();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "move",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <li
        className={`todo-item ${
          todo.completed ? CONSTANTS.TODO.COMPLETED : ""
        }`}
      >
        <div
          className={`checkbox ${todo.completed ? CONSTANTS.TODO.CHECKED : ""}`}
          onClick={() => onToggleComplete(todo.id)}
        />
        <span className="todo-text">{todo.text}</span>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          {t("DELETE_BTN_LABEL")}
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
