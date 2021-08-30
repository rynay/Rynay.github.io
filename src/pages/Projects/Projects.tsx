import s from "./Projects.module.scss";
import { data } from "../../data";

export const Projects = () => {
  return (
    <article className={s.container}>
      {data.projects.map((project) => (
        <section
          className={project.half ? s.project_halfWidth : s.project_fullWidth}
          key={project.title}
        >
          <a href={project.site} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.title} />
          </a>
        </section>
      ))}
    </article>
  );
};
