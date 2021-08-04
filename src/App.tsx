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
    <>
      <Header
        theme={theme}
        language={language}
        changeLanguage={changeLanguage}
        changeTheme={changeTheme}
      />

      <div className={s.scrollContainer} data-simplebar>
        <Switch>
          <Route path="/">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
