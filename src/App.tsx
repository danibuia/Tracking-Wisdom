import { FC, useMemo } from "react";
import "./App.css";
import Views from "./views";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./utils/config/theme";
import useThemeToggle from "./hooks/use-theme-toggle";
import ThemeContext from "./utils/context/theme";

const App: FC = () => {
  const [themeMode, toggleThemeMode] = useThemeToggle();
  const themeContext = useMemo(
    () => ({ themeMode, toggleThemeMode }),
    [themeMode, toggleThemeMode]
  );
  return (
    <ThemeProvider theme={theme[themeMode]}>
      <ThemeContext.Provider value={themeContext}>
        <CssBaseline />
        <Views />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
