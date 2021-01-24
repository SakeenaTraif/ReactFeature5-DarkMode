// Styling
import { GlobalStyle, ThemeButton } from "./styles";

// Components
import CookieList from "./components/ProductList";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#C1554E", // main font color
    backgroundColor: "#FCEAE4", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#FFBF4E", // main font color
    backgroundColor: "#AA7461", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme , setcurrentTheme] = useState(theme.light);

  const toggleCurrentTheme =() => {
        if (currentTheme == theme.light) setcurrentTheme(theme.dark);
        else setcurrentTheme (theme.light);
  };

  return (
    <ThemeProvider theme= {currentTheme}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}> 
      {currentTheme === theme.light ? "Dark mode" : "Light mode"}

      </ThemeButton>
      <Home />
      <CookieList />
    </ThemeProvider>
  );
}

export default App;
