import { useEffect, useState } from 'react'
import s from './Last7DaysActivity.module.scss'

type PropTypes = {
  theme: 'light' | 'dark'
}

export const Last7DaysActivity = ({ theme }: PropTypes) => {
  const [isLightShown, setIsLightShown] = useState<boolean>()
  const [isDarkShown, setIsDarkShown] = useState<boolean>()

  useEffect(() => {
    setIsLightShown(theme === 'light')
    setIsDarkShown(theme === 'dark')
  }, [theme])

  return (
    <section>
      <h2>💻 Last 7 Days Activity:</h2>
      <figure
        className={`${s.lastActivity__chartsContainer} ${
          !isLightShown ? s.lastActivity__chartsContainer_hidden : ''
        }`}>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/3ff3769d-6a27-4997-99fa-f5db5f030abf.svg"></embed>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/bfc8edd9-32c4-405a-9e2f-da958216dfd2.svg"></embed>
      </figure>
      <figure
        className={`${s.lastActivity__chartsContainer} ${
          !isDarkShown ? s.lastActivity__chartsContainer_hidden : ''
        }`}>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/e85a96bf-6292-4ef6-b69b-b7a75416ff60.svg"></embed>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/cae70cb8-f570-4d33-a044-7dc6159f2fab.svg"></embed>
      </figure>
    </section>
  )
}
