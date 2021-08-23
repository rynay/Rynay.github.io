import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { data } from "../../data";

export const Last7DaysActivity = () => {
  const [language] = useContext(LanguageContext);
  return (
    <section>
      <h2>{data.headings.activity[language]}:</h2>
    </section>
  );
};
