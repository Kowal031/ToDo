import { FC, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { TodoType } from "../types/todoType";
import { useTranslation } from "../utils/use-translations";
import TodoDownloadModal from "./TodoDownolandModal";

interface TodoHeaderButtonsProps {
  handleAddTodoText: (text: string) => void;
  todos: TodoType[];
}

const TodoHeaderButtons: FC<TodoHeaderButtonsProps> = ({
  handleAddTodoText,
  todos,
}) => {
  const t = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="todo-add-form-actions">
      <button
        type="button"
        className="todo-add-cancel-btn"
        onClick={() => {
          handleAddTodoText("");
        }}
      >
        {t("CANCEL_BTN_LABEL")}
      </button>
      <button type="submit" className="todo-add-confirm-btn">
        {t("ADD_BTN_LABEL")}
      </button>
      <FaFileDownload onClick={handleDownloadClick} className="download-btn" />
      {isModalOpen && (
        <TodoDownloadModal
          isOpen={isModalOpen}
          handleModalClose={handleModalClose}
          todos={todos}
        />
      )}
    </div>
  );
};

export default TodoHeaderButtons;
