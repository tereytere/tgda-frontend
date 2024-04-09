import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface'
import Themes from '../components/Themes';

const Podcasts: React.FC = () => {
  const [podcasts, setPodcast] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=podcast');
        setPodcast(response.data);
      } catch (error) {
        console.error('Error fetching podcast: ', error);
      }
    };

    fetchPodcast();
  }, []);

  return (
    <>
      <div className='content'>
        <h2>Podcast</h2>
        <ul>
          {podcasts.map(podcast => (
            <li key={podcast.id}>
              <h3>{podcast.title}</h3>
              <p>{podcast.body}</p>
              {podcast.image && <img src={podcast.image} alt={podcast.title} />}
              {podcast.url && <p><a href={podcast.url} target="_blank" rel="noopener noreferrer">{podcast.url}</a></p>}
              {typeof podcast.author === 'object' ? (
                <p>
                  Autor: <Link to={`/autor/${(podcast.author as Author).id}`}>
                    {(podcast.author as Author).name}
                  </Link>
                </p>
              ) : (
                <p>Autor: {podcast.author}</p>
              )}
              {podcast.themes && <Themes themes={podcast.themes} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Podcasts;
