import { FC } from "react";

import { useTranslation } from "../utils/use-translations";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header: FC = () => {
  const t = useTranslation();
  return (
    <div className="toggle-container">
      <p className="title">{t("TITLE")}</p>
      <div className="switcher-container">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
