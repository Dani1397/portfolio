import { ThemeProvider } from "styled-components";
import MainSection from "./components/MainSection";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

const theme = {
  white: "#f0f0f0",
  red: "#be3144",
  blue: "#45567d",
  gray: "#303841",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainSection/> 
      <Projects/>
      <NavBar/>
      <Contact/>
    </ThemeProvider>
 )
}

export default App;
