import { data } from '../../data'
import s from './Stack.module.scss'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const Stack = ({ language }: PropTypes) => {
  return (
    <section className={s.stack}>
      <h2>{data.headings.stack[language]}</h2>

      <ul className={s.stack__techContainer}>
        {data.stack.map((tool) => (
          <li key={tool.src}>
            <img src={`/images/${tool.src}.svg`} alt={tool.alt} />
            <span>{tool.alt}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
