import { data } from '../../data'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const Greeting = ({ language }: PropTypes) => {
  return <h1>{data.headings.greeting[language]}</h1>
}
