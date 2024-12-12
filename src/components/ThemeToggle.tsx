import { FC } from "react";
import { CONSTANTS } from "../constants/constants";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switch-container">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme === CONSTANTS.THEME.DARK}
          onChange={toggleTheme}
        />
        <span className="theme-slider" />
      </label>
    </div>
  );
};

export default ThemeToggle;
