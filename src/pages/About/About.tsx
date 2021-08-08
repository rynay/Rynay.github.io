import { Greeting } from '../../components/Greeting/Greeting'
import { Last7DaysActivity } from '../../components/Last7DaysActivity'
import { Stack } from '../../components/Stack'
import { data } from '../../data'

type PropTypes = {
  language: keyof typeof data['languages']
}

export const About = ({ language }: PropTypes) => {
  return (
    <>
      <Greeting language={language} />
      <Stack language={language} />
      <Last7DaysActivity language={language} />
    </>
  )
}
