import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { SearchResults } from '../interfaces/search.interface';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<Error | AxiosError<unknown, unknown> | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get<SearchResults>('http://localhost:8000/search', {
        params: { query: searchQuery }
      });

      // Redirect to search results page with search results as prop
      navigate('/search-results', { state: { searchResults: response.data } });
    } catch (error: unknown) {
      // Handle error
      if (axios.isAxiosError(error)) {
        setError(error as AxiosError<unknown, unknown>);
      } else {
        setError(new Error('An unknown error occurred'));
      }
      console.error('Error searching:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="/favicon.ico" alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
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
            <Link to="/podcasts" className="nav-link">Podcasts</Link>
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
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">Buscar</button>
        </form>
        {error && error.message && <div>Error: {error.message}</div>}
      </div>
    </nav>
  );
}