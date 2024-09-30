import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProps = {
  children: React.ReactNode;
};
export const themeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  return (
    <themeContext.Provider value={theme}>{children}</themeContext.Provider>
  );
};
