import { FC, ReactNode, createContext, useContext, useState } from "react";
import { IntlProvider } from "react-intl";
import { translations } from "../translation/common";
import {
  LanguageEnum,
  defaultLanguage,
} from "../translation/translations-helpers";
import { getLanguage, saveLanguage } from "../utils/localStorageUtils";

type LanguageContextType = {
  language: LanguageEnum;
  handleChangeLanguage: (language: LanguageEnum) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  handleChangeLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const currLanguage = getLanguage();

  const [language, setLanguage] = useState<LanguageEnum>(currLanguage);

  const handleChangeLanguage = (language: LanguageEnum) => {
    setLanguage(language);
    saveLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      <IntlProvider locale={language} messages={translations[language]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
