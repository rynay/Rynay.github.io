export const data: Data = {
  stack: [
    {
      src: 'typescript',
      alt: 'TypeScript',
    },
    {
      src: 'react',
      alt: 'React',
    },
    {
      src: 'redux',
      alt: 'Redux',
    },
    {
      src: 'javascript',
      alt: 'JavaScript',
    },
    {
      src: 'sass',
      alt: 'SASS',
    },
    {
      src: 'html',
      alt: 'HTML',
    },
    {
      src: 'css',
      alt: 'CSS',
    },
    {
      src: 'git',
      alt: 'Git',
    },
    {
      src: 'github',
      alt: 'GitHub',
    },
    {
      src: 'visual-studio-code',
      alt: 'VS Code',
    },
  ],
  headings: {
    activity: {
      ru: '💻 Активность За Последние 7 Дней',
      en: '💻 Last 7 Days Activity',
    },
    greeting: {
      ru: '🖖 Привет, я Ксения!',
      en: "🖖 Hi there! I'm Kseniia",
    },
    stack: {
      ru: '🧰 Языки, Технологии и Инструменты:',
      en: '🧰 Languages, Technologies and Tools:',
    },
  },
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
  stack: {
    src: string
    alt: string
  }[]
  headings: {
    [key in string]: {
      en: string
      ru: string
    }
  }
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
