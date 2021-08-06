import { Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { data } from './data'
import { useState } from 'react'
import s from './App.module.scss'

function App() {
  const [theme, setTheme] = useState<keyof typeof data['themes']>(
    data.themes.dark
  )
  const [language, setLanguage] = useState<keyof typeof data['languages']>(
    data.languages.en
  )

  const changeLanguage = (language: keyof typeof data['languages']): void => {
    setLanguage(language)
  }
  const changeTheme = (theme: keyof typeof data['themes']): void => {
    setTheme(theme)
  }

  return (
    <div
      className={`${s.scrollContainer} ${s.app} ${
        theme === 'dark' ? s.app_dark : s.app_light
      } data-simplebar`}>
      <Header
        theme={theme}
        language={language}
        changeLanguage={changeLanguage}
        changeTheme={changeTheme}
      />
      <main className={s.container}>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <About language={language} theme={theme} />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
