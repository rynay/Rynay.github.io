import { useEffect, useState } from 'react'
import { data } from '../../data'
import s from './Last7DaysActivity.module.scss'

type PropTypes = {
  theme: keyof typeof data['themes']
  language: keyof typeof data['languages']
}

export const Last7DaysActivity = ({ theme, language }: PropTypes) => {
  const [isLightShown, setIsLightShown] = useState<boolean>()
  const [isDarkShown, setIsDarkShown] = useState<boolean>()

  useEffect(() => {
    setIsLightShown(theme === 'light')
    setIsDarkShown(theme === 'dark')
  }, [theme])

  return (
    <section>
      <h2>{data.headings.activity[language]}:</h2>
      <figure
        className={`${s.lastActivity__chartsContainer} ${
          !isLightShown ? s.lastActivity__chartsContainer_hidden : ''
        }`}>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/63f497a2-e009-4c3d-be34-5632b9bcb701.svg"></embed>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/ed7940e3-4323-43b8-a058-1757ef30ac47.svg"></embed>
      </figure>
      <figure
        className={`${s.lastActivity__chartsContainer} ${
          !isDarkShown ? s.lastActivity__chartsContainer_hidden : ''
        }`}>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/2a01873b-3f57-47e8-9495-207f740be9cf.svg"></embed>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/41168743-ba68-4234-9062-6ea94d26b550.svg"></embed>
      </figure>
    </section>
  )
}
