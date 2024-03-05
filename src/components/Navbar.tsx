import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="../../public/favicon.ico" alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
          TuGranitoDeArena
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/libros" className="nav-link">Libros</Link>
          </li>
          <li className="nav-item">
            <Link to="/peliculas" className="nav-link">Películas</Link>
          </li>
          <li className="nav-item">
            <Link to="/instagram" className="nav-link">Instagram</Link>
          </li>
          <li className="nav-item">
            <Link to="/paginasweb" className="nav-link">Páginas Web</Link>
          </li>
          <li className="nav-item">
            <Link to="/youtube" className="nav-link">YouTube</Link>
          </li>
          <li className="nav-item">
            <Link to="/ayuda" className="nav-link">Ayuda</Link>
          </li>
        </ul>
        <form className="search-form">
          <input className="search-input" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="search-button" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
}
