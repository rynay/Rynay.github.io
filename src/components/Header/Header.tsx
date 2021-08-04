import { NavLink } from 'react-router-dom'
import { data, Theme } from '../../data'

type PropTypes = {
  language: keyof typeof data['languages']
  theme: Theme
  changeLanguage: (lang: PropTypes['language']) => void
  changeTheme: (theme: keyof typeof data['themes']) => void
}

export const Header = ({
  language,
  changeLanguage,
  changeTheme,
}: PropTypes) => {
  return (
    <header>
      <nav>
        {data.navLinks.map((navLink) => (
          <NavLink to={navLink.link} key={navLink.link}>
            {navLink.title[language]}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
