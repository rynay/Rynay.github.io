import { NavLink } from 'react-router-dom'
import { data } from '../../data'
import s from './Header.module.scss'

type PropTypes = {
  language: keyof typeof data['languages']
  theme: keyof typeof data['themes']
  changeLanguage: (lang: PropTypes['language']) => void
  changeTheme: (theme: PropTypes['theme']) => void
}

export const Header = ({
  language,
  theme,
  changeLanguage,
  changeTheme,
}: PropTypes) => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <nav className={s.header__nav}>
          {data.navLinks.map((navLink) => (
            <NavLink
              exact
              to={navLink.link}
              key={navLink.link}
              className={s.header__navLink}
              activeClassName={s.header__navLink_active}>
              {navLink.title[language]}
            </NavLink>
          ))}
        </nav>
        <div className={s.header__togglersContainer}>
          <button
            onClick={() => changeLanguage(language === 'en' ? 'ru' : 'en')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                changeLanguage(language === 'en' ? 'ru' : 'en')
              }
            }}
            aria-label={
              language === 'ru'
                ? 'Английский язык. English language'
                : 'Russian language. Русский язык'
            }>
            <img src={`/images/${language}.svg`} alt="flag" />
          </button>
          <button
            onClick={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                changeTheme(theme === 'dark' ? 'light' : 'dark')
              }
            }}
            aria-label={
              theme === 'dark'
                ? language === 'en'
                  ? 'Light theme'
                  : 'Светлая тема'
                : language === 'en'
                ? 'Dark theme'
                : 'Темная тема'
            }>
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}
