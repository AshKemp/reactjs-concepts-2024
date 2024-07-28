/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [theme, setTheme] = useState("light");
  function handleChangeThemeOnButtonClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <GlobalContext.Provider value={{ theme, handleChangeThemeOnButtonClick }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
