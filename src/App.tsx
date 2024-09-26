import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Authors from "./pages/Authors";
import Autor from "./pages/Autor";
import Books from "./pages/Books";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Instagram from "./pages/Instagram";
import Movies from "./pages/Movies";
import Themes from "./pages/Themes";
import Tema from "./pages/Tema";
import Webpages from "./pages/Webpages";
import Youtube from "./pages/Youtube";
import Error from "./pages/Error";
import theme from "./theme";
import Podcasts from "./pages/Podcasts";
import SearchResultsPage from "./pages/SearchResultsPage";
import Pokemon from "./pages/Pokemon";
import Posts from "./pages/Posts";
import SinglePost from './pages/SinglePost';
import Links from "./pages/Links";
import TikTok from "./pages/TikTok";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/autores" element={<Authors />} />
            <Route path="/autor/:authorId" element={<Autor />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="/libros" element={<Books />} />
            <Route path="/links" element={<Links />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/tiktok" element={<TikTok />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/peliculas" element={<Movies />} />
            <Route path="/temas" element={<Themes />} />
            <Route path="/temas/:id" element={<Tema />} />
            <Route path="/paginasweb" element={<Webpages />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/ayuda" element={<Help />} />
            <Route path="/resultados/:query" element={<SearchResultsPage />} />
            <Route path="/pokemon" element={<Pokemon />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}
