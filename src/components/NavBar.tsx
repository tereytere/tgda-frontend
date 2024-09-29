import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SearchResults } from '../interfaces/search.interface';
import { BASE_URL } from '../constants';


export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<Error | AxiosError<unknown, unknown> | null>(null);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get<SearchResults>(`${BASE_URL}/search`, {
        params: { query: searchQuery }
      });

      // Redirect to search results page with search query in URL
      navigate(`/resultados/${searchQuery}`, { state: { searchResults: response.data } });

      // Clear the search input after successful search
      setSearchQuery('');
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
    <Navbar expand="lg" className="nav-container">
      <Navbar.Brand href="/" className="navbar-brand">
        <img src="/favicon.ico" alt="Logo" width="40" height="34" className="d-inline-block align-text-top" />
        TuGranitoDeArena
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="navflex">
        <Nav className="nav-links">
          <Nav.Link href="/libros" className="navbar-a">Libros</Nav.Link>
          <Nav.Link href="/podcasts" className="navbar-a">Podcasts</Nav.Link>
          <Nav.Link href="/links" className="navbar-a">Enlaces</Nav.Link>
          <Nav.Link href="/ayuda" className="navbar-a">Ayuda</Nav.Link>
          <form className="search-form d-flex" onSubmit={handleSearch}>
            <input
              className="search-input form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </Nav>
        {error && error.message && <div className="text-danger">Error: {error.message}</div>}
      </Navbar.Collapse>
    </Navbar>);
}