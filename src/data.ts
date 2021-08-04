export const theme = (themeName: 'dark' | 'light'): Theme => {
  return {
    primaryBackgroundColor: themeName === 'dark' ? '#000' : '#fff',
    secondaryBackgroundColor: themeName === 'dark' ? '#000' : '#fff',
    primaryTextColor: themeName === 'dark' ? '#fff' : '#000',
    secondaryTextColor: themeName === 'dark' ? '#fff' : '#000',
  }
}

export const data: Data = {
  themes: {
    dark: theme('dark'),
    light: theme('light'),
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
    dark: Theme
    light: Theme
  }
  languages: {
    ru: 'ru'
    en: 'en'
  }

  navLinks: NavLink[]
}

export type Theme = {
  primaryBackgroundColor: string
  secondaryBackgroundColor: string
  primaryTextColor: string
  secondaryTextColor: string
}
