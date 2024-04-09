import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface'
import Themes from '../components/Themes';

const Instagram: React.FC = () => {
  const [instagrams, setInstagram] = useState<Post[]>([]);

  useEffect(() => {
    const fetchInstagram = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=instagram');
        setInstagram(response.data);
      } catch (error) {
        console.error('Error fetching instagram:', error);
      }
    };

    fetchInstagram();
  }, []);

  return (
    <>
      <div className='content'>
        <h2>Instagram</h2>
        <ul>
          {instagrams.map(instagram => (
            <li key={instagram.id}>
              <h3>{instagram.title}</h3>
              <p>{instagram.body}</p>
              {instagram.image && <img src={instagram.image} alt={instagram.title} />}
              {instagram.url && <p><a href={instagram.url} target="_blank" rel="noopener noreferrer">{instagram.url}</a></p>}
              {typeof instagram.author === 'object' ? (
              <p>
                Autor: <Link to={`/autor/${(instagram.author as Author).id}`}>
                  {(instagram.author as Author).name}
                </Link>
              </p>
            ) : (
              <p>Autor: {instagram.author}</p>
            )}
            {instagram.themes && <Themes themes={instagram.themes} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Instagram;
