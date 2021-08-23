import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { data } from "../../data";
import { ListOfTechnologies } from "../ListOfTechnologies";

export const Stack = () => {
  const [language] = useContext(LanguageContext);
  return (
    <section>
      <h2>{data.headings.stack[language]}</h2>

      <ListOfTechnologies technologies={data.stack} />
    </section>
  );
};
