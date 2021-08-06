import { data } from '../../data'
import s from './Stack.module.scss'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const Stack = ({ language }: PropTypes) => {
  return (
    <section className={s.stack}>
      <h2>{data.headings.stack[language]}</h2>
      <div className={s.stack__imagesContainer}>
        {data.stack.map((tool) => (
          <img key={tool.src} src={`/images/${tool.src}.svg`} alt={tool.alt} />
        ))}
      </div>
    </section>
  )
}
