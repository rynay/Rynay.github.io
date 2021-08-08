import { useLayoutEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { data } from '../../data'
import s from './Charts.module.scss'

type Props = {
  theme: keyof typeof data['themes']
}

export const Charts = ({ theme }: Props) => {
  const match = useRouteMatch()
  const [isShown, setIsShown] = useState<boolean>()

  useLayoutEffect(() => {
    if (match.isExact && match.path === '/') {
      setIsShown(true)
    } else {
      setIsShown(false)
    }
  }, [match])

  return (
    <>
      <figure
        className={`${s.chartsContainer} ${
          theme === 'light' ? '' : s.chartsContainer_hidden
        } ${!isShown ? s.chartsContainer_hidden : ''}`}>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/63f497a2-e009-4c3d-be34-5632b9bcb701.svg"></embed>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/ed7940e3-4323-43b8-a058-1757ef30ac47.svg"></embed>
      </figure>
      <figure
        className={`${s.chartsContainer} ${
          theme === 'dark' ? '' : s.chartsContainer_hidden
        }  ${!isShown ? s.chartsContainer_hidden : ''}`}>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/2a01873b-3f57-47e8-9495-207f740be9cf.svg"></embed>
        <embed
          width={'50%'}
          src="https://wakatime.com/share/@rynay/41168743-ba68-4234-9062-6ea94d26b550.svg"></embed>
      </figure>
    </>
  )
}
