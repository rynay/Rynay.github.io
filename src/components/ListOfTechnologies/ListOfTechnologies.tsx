import { Technology } from '../../data'
import s from './ListOfTechnologies.module.scss'

type Props = {
  technologies: Technology[]
}

export const ListOfTechnologies = ({ technologies }: Props) => {
  return (
    <ul className={s.technologies}>
      {technologies.map((tool) => (
        <li key={tool.src}>
          <img src={`/images/${tool.src}.svg`} alt={tool.alt} />
          <span>{tool.alt}</span>
        </li>
      ))}
    </ul>
  )
}
