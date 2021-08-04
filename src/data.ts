export const data: Data = {
  themes: {
    dark: 'dark',
    light: 'light',
  },
  languages: {
    ru: 'ru',
    en: 'en',
  },
  navLinks: [
    {
      title: {
        ru: 'Обо мне',
        en: 'About',
      },
      link: '/',
    },
    {
      title: {
        ru: 'Портфолио',
        en: 'Portfolio',
      },
      link: '/portfolio',
    },
  ],
}

type NavLink = {
  title: {
    ru: string
    en: string
  }
  link: string
}

type Data = {
  themes: {
    dark: 'dark'
    light: 'light'
  }
  languages: {
    ru: 'ru'
    en: 'en'
  }

  navLinks: NavLink[]
}
