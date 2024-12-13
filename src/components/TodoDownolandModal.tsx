import { FC } from "react";
import { useLanguage } from "../context/LanguageContext";
import { TodoType } from "../types/todoType";
import { generateTodoPDF } from "../utils/generatePDF";
import { useTranslation } from "../utils/use-translations";

interface TodoDownloadModalProps {
  isOpen: boolean;
  handleModalClose: () => void;
  todos: TodoType[];
}

const TodoDownloadModal: FC<TodoDownloadModalProps> = ({
  isOpen,
  handleModalClose,
  todos,
}) => {
  const t = useTranslation();
  const { language } = useLanguage();
  if (!isOpen) return null;

  const handleDownloadConfirm = async () => {
    await generateTodoPDF(todos, language);
    handleModalClose();
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{t("MODAL.TITLE")}</h2>
        <div className="modal-body">
          <p className="modal-description">{t("MODAL.NOTE")}</p>
        </div>
        <div className="modal-actions">
          <button onClick={handleModalClose} className="btn btn-cancel">
            {t("MODAL.BUTTONS.CANCEL")}
          </button>
          <button onClick={handleDownloadConfirm} className="btn btn-confirm">
            {t("MODAL.BUTTONS.DOWNLOAD")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDownloadModal;
