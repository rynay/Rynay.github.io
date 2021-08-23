import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { data } from "../../data";

export const Greeting = () => {
  const [language] = useContext(LanguageContext);
  return (
    <section>
      <h1>{data.headings.greeting[language]}</h1>
    </section>
  );
};
