import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface'
import Themes from '../components/Themes';

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
              {typeof movie.author === 'object' ? (
                <p>
                  Autor: <Link to={`/autor/${(movie.author as Author).id}`}>
                    {(movie.author as Author).name}
                  </Link>
                </p>
              ) : (
                <p>Autor: {movie.author}</p>
              )}
              {movie.themes && <Themes themes={movie.themes} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Movies;
