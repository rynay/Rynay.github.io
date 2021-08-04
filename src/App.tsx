import { Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { data } from './data'
import { useState } from 'react'
import { theme as getTheme, Theme } from './data'

function App() {
  const [theme, setTheme] = useState<Theme>(data.themes.dark)
  const [language, setLanguage] = useState<keyof typeof data['languages']>(
    data.languages.en
  )

  const changeLanguage = (language: keyof typeof data['languages']): void => {
    setLanguage(language)
  }
  const changeTheme = (theme: keyof typeof data['themes']): void => {
    setTheme(getTheme(theme))
  }

  return (
    <>
      <Header
        theme={theme}
        language={language}
        changeLanguage={changeLanguage}
        changeTheme={changeTheme}
      />
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </>
  )
}

export default App
