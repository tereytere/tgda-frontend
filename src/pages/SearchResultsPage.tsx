import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchResults } from '../interfaces/search.interface';

const SearchResultsPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get<SearchResults>('http://localhost:8000/search');
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, []);

  if (!searchResults) {
    return <div className='content'>Cargando...</div>;
  }

  const { authorResults, postResults, themeResults } = searchResults;

  return (
    <div className='content'>
      <h2>Resultados</h2>
      <div className="search-results">
        {authorResults.length > 0 ? (
          <div>
            <h3>Autores</h3>
            <ul>
              {authorResults.map(author => (
                <li key={author.id}>{author.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No se han encontrado autores</p>
        )}
        {postResults.length > 0 ? (
          <div>
            <h3>Posts</h3>
            <ul>
              {postResults.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No se han encontrado posts</p>
        )}
        {themeResults.length > 0 ? (
          <div>
            <h3>Themes</h3>
            <ul>
              {themeResults.map(theme => (
                <li key={theme.id}>{theme.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No se han encontrado temas</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
