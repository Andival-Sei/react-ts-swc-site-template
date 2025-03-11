// import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

// const Container = styled.div`
//   padding: 2rem;
// `;
// Импорт страниц
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <Container> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        {/* </Container> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
