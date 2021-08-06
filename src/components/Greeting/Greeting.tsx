import { data } from '../../data'
import s from './Greeting.module.scss'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const Greeting = ({ language }: PropTypes) => {
  return (
    <section className={s.section}>
      <h1>{data.headings.greeting[language]}</h1>
    </section>
  )
}
