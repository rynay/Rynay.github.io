import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageProvider";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { data } from "../../data";
import s from "./Header.module.scss";

export const Header = () => {
  const [language, toggleLanguage] = useContext(LanguageContext);
  const [theme, toggleTheme] = useContext(ThemeContext);

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <nav className={s.header__nav}>
          {data.navLinks.map((navLink) => (
            <NavLink
              exact
              to={navLink.link}
              key={navLink.link}
              className={s.header__navLink}
              activeClassName={s.header__navLink_active}
            >
              {navLink.title[language]}
            </NavLink>
          ))}
        </nav>
        <div className={s.header__togglersContainer}>
          <button
            onClick={toggleLanguage}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggleLanguage();
              }
            }}
            aria-label={
              language === "ru"
                ? "Английский язык. English language"
                : "Russian language. Русский язык"
            }
          >
            <img src={`/images/${language}.svg`} alt="flag" />
          </button>
          <button
            onClick={toggleTheme}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                toggleTheme();
              }
            }}
            aria-label={
              theme === "dark"
                ? language === "en"
                  ? "Light theme"
                  : "Светлая тема"
                : language === "en"
                ? "Dark theme"
                : "Темная тема"
            }
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
};
