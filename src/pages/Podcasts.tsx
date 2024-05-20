import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface';
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
        <ul className='list'>
          {podcasts.map((podcast) => (
            <li key={podcast.id} className='podcast-item'>
              <h3>{podcast.title}</h3>
              <div className='podcast-content-container'>
                {podcast.url && (
                  <div className='podcast-container'>
                    <iframe
                      src={podcast.url || undefined}
                      width="100%"
                      height="352"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{ borderRadius: '12px' }}
                    ></iframe>
                  </div>
                )}
                <div className='content-container'>
                  <p>{podcast.body}</p>
                  {typeof podcast.author === 'object' ? (
                    <p><Link to={`/author/${(podcast.author as Author).id}`}>
                        {(podcast.author as Author).name}
                      </Link>
                    </p>
                  ) : (
                    <p>{podcast.author}</p>
                  )}
                  {podcast.themes && <Themes themes={podcast.themes} />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Podcasts;
