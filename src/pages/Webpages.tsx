import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../interfaces/post.interface';

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
              <p>Autor: {webpage.author.name}</p>
              {webpage.themes && (
                <div>
                  <h4>Temas:</h4>
                  <ul>
                    {webpage.themes.map(theme => (
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

export default Webpages;
