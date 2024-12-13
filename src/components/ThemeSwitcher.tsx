import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { CONSTANTS } from "../constants/constants";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === CONSTANTS.THEME.DARK}
        onChange={toggleTheme}
      />
      <span className="theme-slider">
        <FaSun className="icon" />
        <FaMoon className="icon moon" />
      </span>
    </label>
  );
};

export default ThemeSwitcher;
