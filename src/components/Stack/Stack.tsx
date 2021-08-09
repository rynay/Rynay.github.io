import { data } from '../../data'
import { ListOfTechnologies } from '../ListOfTechnologies'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const Stack = ({ language }: PropTypes) => {
  return (
    <section>
      <h2>{data.headings.stack[language]}</h2>

      <ListOfTechnologies technologies={data.stack} />
    </section>
  )
}
