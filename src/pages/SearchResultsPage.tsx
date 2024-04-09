import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { SearchResults } from '../interfaces/search.interface';

const SearchResultsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
  const { query } = useParams<{ query: string }>(); // Extract search query from URL

  useEffect(() => {
    setSearchQuery(query ?? '');
  }, [query]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<SearchResults>('http://localhost:8000/search', {
          params: { query: searchQuery }
        });
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Error fetching search results');
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  if (loading) {
    return <div className='content'>Cargando...</div>;
  }

  if (error) {
    return <div className='content'>Error: {error}</div>;
  }

  if (!searchResults || (searchResults && searchResults.authorResults.length === 0 && searchResults.postResults.length === 0 && searchResults.themeResults.length === 0)) {
    return <div className='content'>No se han encontrado resultados</div>;
  }

  const { authorResults, postResults, themeResults } = searchResults;

  return (
    <div className='content'>
      <h2>Resultados</h2>
      <div className="search-results">
        {authorResults.length > 0 && (
          <div>
            <h3>Autores</h3>
            <ul>
              {authorResults.map(author => (
                <li key={author.id}>
                  <Link to={`/autor/${author.id}`}>{author.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {postResults.length > 0 && (
          <div>
            <h3>Posts</h3>
            <ul>
              {postResults.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        )}
        {themeResults.length > 0 && (
          <div>
            <h3>Temas</h3>
            <ul>
              {themeResults.map(theme => (
                <li key={theme.id}>{theme.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
