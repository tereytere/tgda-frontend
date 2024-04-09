import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface'
import Themes from '../components/Themes';

const Webpages: React.FC = () => {
  const [webpages, setWebpage] = useState<Post[]>([]);

  useEffect(() => {
    const fetchWebpage = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=webpage');
        setWebpage(response.data);
      } catch (error) {
        console.error('Error fetching webpage:', error);
      }
    };

    fetchWebpage();
  }, []);

  return (
    <>
      <div className='content'>
        <h2>Páginas Web</h2>
        <ul>
          {webpages.map(webpage => (
            <li key={webpage.id}>
              <h3>{webpage.title}</h3>
              <p>{webpage.body}</p>
              {webpage.image && <img src={webpage.image} alt={webpage.title} />}
              {webpage.url && <p><a href={webpage.url} target="_blank" rel="noopener noreferrer">{webpage.url}</a></p>}
              {typeof webpage.author === 'object' ? (
              <p>
                Autor: <Link to={`/autor/${(webpage.author as Author).id}`}>
                  {(webpage.author as Author).name}
                </Link>
              </p>
            ) : (
              <p>Autor: {webpage.author}</p>
            )}
            {webpage.themes && <Themes themes={webpage.themes} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Webpages;
