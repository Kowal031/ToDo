import { FC } from "react";
import { CONSTANTS } from "../constants/constants";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useTheme();

  const sunMoonOn = "#e6e600";
  const sunMoonOff = "#808080";

  return (
    <div className="theme-switch-container">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme === CONSTANTS.THEME.DARK}
          onChange={toggleTheme}
        />
        <span className="theme-slider">
          <FaSun
            color={theme === CONSTANTS.THEME.DARK ? sunMoonOff : sunMoonOn}
            className="icon "
          />
          <FaMoon
            color={theme === CONSTANTS.THEME.DARK ? sunMoonOn : sunMoonOff}
            className="icon moon"
          />
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
