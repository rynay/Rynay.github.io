import { ReactElement, createContext, useState, useEffect } from "react";
import { data } from "../data";

type Props = {
  children: ReactElement | ReactElement[];
};

export const LanguageContext = createContext<
  [keyof typeof data["languages"], () => void]
>(null!);

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<keyof typeof data["languages"]>(
    (localStorage.getItem("language") as "ru" | "en") || data.languages.en
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    language === "ru" ? setLanguage("en") : setLanguage("ru");
  };

  return (
    <LanguageContext.Provider value={[language, toggleLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};
