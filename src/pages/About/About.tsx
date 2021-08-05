import { Last7DaysActivity } from '../../components/Last7DaysActivity'
import { data } from '../../data'
import s from './About.module.scss'

type PropTypes = {
  theme: keyof typeof data['themes']
}

export const About = ({ theme }: PropTypes) => {
  return (
    <>
      <Last7DaysActivity theme={theme} />
    </>
  )
}
