import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useLocalStorage } from "hooks/useLocalStorage";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextValue = {
  darkTheme: boolean;
};
type ThemeUpdateContextValue = {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({ darkTheme: false });
const ThemeUpdateContext = createContext<ThemeUpdateContextValue>({
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useLocalStorage("Theme", Boolean);
  const [throttle, setThrottle] = useState("");
  const theme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {}, []);

  return (
    <ThemeContext.Provider value={{ darkTheme }}>
      <ThemeUpdateContext.Provider value={{ toggleTheme }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
