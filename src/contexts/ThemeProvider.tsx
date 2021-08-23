import { ReactElement, createContext, useState } from "react";
import { data } from "../data";

type Props = {
  children: ReactElement | ReactElement[];
};

export const ThemeContext = createContext<
  [keyof typeof data["themes"], () => void]
>(null!);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<keyof typeof data["themes"]>(
    data.themes.dark
  );

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
