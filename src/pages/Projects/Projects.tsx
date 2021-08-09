import s from './Projects.module.scss'
import { data } from '../../data'
import { ListOfTechnologies } from '../../components/ListOfTechnologies'

type Props = {
  language: keyof typeof data.languages
  theme: keyof typeof data.themes
}

export const Projects = ({ language, theme }: Props) => {
  return (
    <article className={s.container}>
      {data.projects.map((project, i) => (
        <section className={s.project} key={project.site}>
          <div className={s.project__imageContainer}>
            <img src={project.image} alt={project.title} />
          </div>
          <div className={s.project__contentContainer}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={s.project__technologies}>
              <ListOfTechnologies technologies={project.technologies} />
            </div>
            <div className={s.project__buttonsContainer}>
              <a
                className={`${s.project__link_site} ${
                  theme === 'dark'
                    ? s.project__link_siteDark
                    : s.project__link_siteLight
                }`}
                href={project.site}
                target="_blank"
                rel="noreferrer">
                {data.buttonTexts.projectSiteLink[language]}
              </a>
              <a
                className={`${s.project__link_code} ${
                  theme === 'dark'
                    ? s.project__link_codeDark
                    : s.project__link_codeLight
                }`}
                href={project.code}
                target="_blank"
                rel="noreferrer">
                {data.buttonTexts.projectSourceLink[language]}
              </a>
            </div>
          </div>
        </section>
      ))}
    </article>
  )
}
