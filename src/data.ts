export const data: Data = {
  projects: [
    {
      title: 'Netflix Clone',
      site: 'https://netflix-react-clone-70d64.web.app/',
      code: '',
      image: '/images/netflix.png',
      width: '3',
      height: '3',
      description: '',
      technologies: [
        {
          src: 'javascript',
          alt: 'JavaScript',
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
          src: 'firebase',
          alt: 'Firebase',
        },
      ],
    },
    {
      title: 'Instagram Clone',
      site: 'https://instagram-clone-react-cb1af.web.app/',
      code: '',
      image: '/images/instagram.png',
      description: '',width: '2',
      height: '2',
      technologies: [
        {
          src: 'javascript',
          alt: 'JavaScript',
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
          src: 'firebase',
          alt: 'Firebase',
        },
      ],
    },
    {
      title: 'Amazon Clone',
      site: 'https://amazo-react-clone.web.app/',
      code: '',
      image: '/images/amazon.png',
      description: '',width: '2',
      height: '2',
      technologies: [
        {
          src: 'javascript',
          alt: 'JavaScript',
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
          src: 'firebase',
          alt: 'Firebase',
        },
      ],
    },
    {
      title: 'Chat App',
      site: 'https://whatsapp-react-clone-506fb.web.app/',
      code: '',
      image: '/images/whatsapp.png',
      description: '',
      width: '2',
      height: '2',
      technologies: [
        {
          src: 'javascript',
          alt: 'JavaScript',
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
          src: 'firebase',
          alt: 'Firebase',
        },
      ],
    },
  ],
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
      src: 'redux',
      alt: 'Redux-Toolkit',
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
      src: 'firebase',
      alt: 'Firebase',
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
  buttonTexts: {
    projectSiteLink: {
      ru: 'Посетить',
      en: 'Visit',
    },
    projectSourceLink: {
      ru: 'Исходный код',
      en: 'Source Code',
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
        en: 'Projects',
      },
      link: '/projects',
    },
    {
      title: {
        ru: 'Контакты',
        en: 'Contact',
      },
      link: '/contact',
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

export type Technology = {
  src: string
  alt: string
}

type Data = {
  projects: {
    title: string
    image: string
    site: string
    code: string
    width: string,
    height: string,
    description: string
    technologies: Technology[]
  }[]
  buttonTexts: {
    [key in string]: {
      ru: string
      en: string
    }
  }
  stack: Technology[]
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
