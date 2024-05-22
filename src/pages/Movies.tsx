import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import Video from "../components/Video";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Post[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Post[]>(
          "http://localhost:8000/posts?type=película"
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="content">
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <h3>{movie.title}</h3>
            <div className="video-text-container">
              <Video url={movie.image ?? undefined} title={movie.title ?? undefined} />
              <div className="content-container">
                <p>{movie.body}</p>
                {movie.url && (
                  <p>
                    Mírala entera aquí:{" "}
                    <a href={movie.url} target="_blank" rel="noopener noreferrer">
                      {movie.url}
                    </a>
                  </p>
                )}
                {typeof movie.author === "object" && (
                  <h4>
                    <Link to={`/autor/${(movie.author as Author).id}`}>
                      {(movie.author as Author).name}
                    </Link>
                  </h4>
                )}
                {movie.themes && <Themes themes={movie.themes} />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
