import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CONSTANTS } from "../constants/constants";
import { ThemeContextType, ThemeType } from "../types/themeType";
import { getTheme, saveTheme } from "../utils/localStorageUtils";

const ThemeContext = createContext<ThemeContextType>({
  theme: CONSTANTS.THEME.LIGHT,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(getTheme());

  useEffect(() => {
    document.body.className = `${theme}-theme`;
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === CONSTANTS.THEME.LIGHT
        ? CONSTANTS.THEME.DARK
        : CONSTANTS.THEME.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
