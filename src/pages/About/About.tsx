import { Greeting } from '../../components/Greeting/Greeting'
import { Last7DaysActivity } from '../../components/Last7DaysActivity'
import { Stack } from '../../components/Stack'
import { data } from '../../data'
import s from './About.module.scss'

type PropTypes = {
  theme: keyof typeof data['themes']
  language: keyof typeof data['languages']
}

export const About = ({ theme, language }: PropTypes) => {
  return (
    <>
      <Greeting language={language} />
      <Stack language={language} />
      <Last7DaysActivity language={language} theme={theme} />
    </>
  )
}
