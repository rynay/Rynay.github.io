import { data } from '../../data'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const Last7DaysActivity = ({ language }: PropTypes) => {
  return (
    <section>
      <h2>{data.headings.activity[language]}:</h2>
    </section>
  )
}
