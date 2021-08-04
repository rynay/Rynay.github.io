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
  changeLanguage,
  changeTheme,
}: PropTypes) => {
  return (
    <header className={s.header}>
      <nav className={s.header__nav}>
        {data.navLinks.map((navLink) => (
          <NavLink
            to={navLink.link}
            key={navLink.link}
            className={s.header__navLink}
            activeClassName={s.header__navLink_active}>
            {navLink.title[language]}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
