import { Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'

function App() {
  return (
    <>
      <Header></Header>
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
