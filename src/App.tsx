import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import s from "./App.module.scss";
import { Charts } from "./components/Charts";
import { ThemeContext } from "./contexts/ThemeProvider";
import { useContext } from "react";

function App() {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={`${s.scrollContainer} ${s.app} ${
        theme === "dark" ? s.app_dark : s.app_light
      }`}
      data-simplebar
    >
      <Header />
      <main className={s.container}>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        <Charts />
      </main>
    </div>
  );
}

export default App;
