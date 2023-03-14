import { Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "components/templates/pages/Home";
import { ThemeContextProvider } from "modules/ThemeContext";
import DetailPage from "components/templates/pages/DetailPage";
import Layout from "components/templates/pages/Layout";

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detailePokemon/:number" element={<DetailPage />}></Route>
        </Route>
      </Routes>
    </ThemeContextProvider>
  );
}

export default App;
