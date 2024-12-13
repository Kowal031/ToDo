import { CONSTANTS } from "../constants/constants";
import { LanguageEnum } from "../translation/translations-helpers";
import { ThemeType } from "../types/themeType";
import { TodoType } from "../types/todoType";

export const getTodos = (): TodoType[] => {
  const storedTodos = localStorage.getItem(CONSTANTS.LOCAL_STORAGE.TODOS);
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const saveTodos = (todos: TodoType[]): void => {
  localStorage.setItem(CONSTANTS.LOCAL_STORAGE.TODOS, JSON.stringify(todos));
};

export const getTheme = (): ThemeType => {
  const storedTheme = localStorage.getItem(CONSTANTS.LOCAL_STORAGE.THEME);
  return storedTheme === CONSTANTS.THEME.DARK
    ? CONSTANTS.THEME.DARK
    : CONSTANTS.THEME.LIGHT;
};

export const saveTheme = (theme: ThemeType): void => {
  localStorage.setItem(CONSTANTS.LOCAL_STORAGE.THEME, theme);
};

export const getLanguage = (): LanguageEnum => {
  const language = localStorage.getItem(CONSTANTS.LOCAL_STORAGE.LANGUAGE);
  return language ? JSON.parse(language) : LanguageEnum.en;
};

export const saveLanguage = (language: LanguageEnum): void => {
  localStorage.setItem(
    CONSTANTS.LOCAL_STORAGE.LANGUAGE,
    JSON.stringify(language)
  );
};
