import { data } from '../../data'
import s from './About.module.scss'

type PropTypes = {
  theme: keyof typeof data['themes']
}

export const About = ({ theme }: PropTypes) => {
  return (
    <>
      <h2>💻 Last 7 Days Activity:</h2>
      <div className={s.about__chartGrid}>
        <a
          target="_blank"
          rel="noreferrer"
          href={
            theme === 'light'
              ? 'https://wakatime.com/share/@rynay/073d4e58-0718-48e1-9007-7d992b5cf3e4.svg'
              : 'https://wakatime.com/share/@rynay/bef82470-4604-40c0-8fb9-4500ae48b2e0.svg'
          }>
          <img
            className={s.about__chart}
            src={
              theme === 'light'
                ? 'https://wakatime.com/share/@rynay/073d4e58-0718-48e1-9007-7d992b5cf3e4.svg'
                : 'https://wakatime.com/share/@rynay/bef82470-4604-40c0-8fb9-4500ae48b2e0.svg'
            }
            alt=""
          />
        </a>
        <a
          href={
            theme === 'light'
              ? 'https://wakatime.com/share/@rynay/2d7d3db1-6943-4e11-8cdb-5cbaeda2a256.svg'
              : 'https://wakatime.com/share/@rynay/77fa4a6b-4304-410e-ad5e-4807defb407e.svg'
          }
          target="_blank"
          rel="noreferrer">
          <img
            className={s.about__chart}
            src={
              theme === 'light'
                ? 'https://wakatime.com/share/@rynay/2d7d3db1-6943-4e11-8cdb-5cbaeda2a256.svg'
                : 'https://wakatime.com/share/@rynay/77fa4a6b-4304-410e-ad5e-4807defb407e.svg'
            }
            alt=""
          />
        </a>
      </div>
    </>
  )
}
