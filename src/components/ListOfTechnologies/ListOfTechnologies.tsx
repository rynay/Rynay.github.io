import s from "./ListOfTechnologies.module.scss";
import { data } from "../../data";

type Props<T> = {
  technologies: T extends { [key in "stack"]: infer R } ? R : T;
};

export const ListOfTechnologies = ({ technologies }: Props<typeof data>) => {
  return (
    <ul className={s.technologies}>
      {technologies.map((tool) => (
        <li key={tool.alt}>
          <img src={`/images/${tool.src}.svg`} alt={tool.alt} />
          <span>{tool.alt}</span>
        </li>
      ))}
    </ul>
  );
};
