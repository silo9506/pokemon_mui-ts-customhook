import { Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "components/templates/pages/Home";
import { ThemeContextProvider } from "modules/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Container maxWidth={false}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
    </ThemeContextProvider>
  );
}

export default App;
