import { jsPDF } from "jspdf";
import { LanguageEnum } from "../translation/translations-helpers";

export const generateTodoPDF = (
  todos: { text: string; completed: boolean }[],
  locale: LanguageEnum
) => {
  const filteredTodos = todos.filter((todo) => !todo.completed);

  const formatDate = (date: Date, locale: LanguageEnum): string => {
    const formatter = new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatter.format(date);
  };

  const currDate = formatDate(new Date(), locale);

  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text(`Todo List, ${currDate}`, doc.internal.pageSize.width / 2, 20, {
    align: "center",
  });

  // TODO items
  doc.setFontSize(12);

  const startY = 30;
  const rowHeight = 12;
  const checkboxSize = 4;
  const textX = doc.internal.pageSize.width / 2;
  const checkboxOffset = 5;

  filteredTodos.forEach((todo, index) => {
    const yPosition = startY + index * rowHeight;

    const checkboxX = textX - checkboxSize - checkboxOffset;

    doc.rect(
      checkboxX,
      yPosition - checkboxSize / 2,
      checkboxSize,
      checkboxSize
    );

    const textY = yPosition;

    doc.text(todo.text, textX, textY + 1);
  });

  // Save
  doc.save(`todo-list.pdf`);
};
