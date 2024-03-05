import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../interfaces/post.interface';

const Movies: React.FC = () => {
  const [movies, setMovie] = useState<Post[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=película');
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
      <div className='content'>
        <h2>Películas</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.body}</p>
              {movie.image && <img src={movie.image} alt={movie.title} />}
              {movie.url && <p><a href={movie.url} target="_blank" rel="noopener noreferrer">{movie.url}</a></p>}
              <p>Autor: {movie.author.name}</p>
              {movie.themes && (
                <div>
                  <h4>Temas:</h4>
                  <ul>
                    {movie.themes.map(theme => (
                      <li key={theme.id}>
                        <a href={`/themes/${theme.id}`}>{theme.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
