import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface'
import Themes from '../components/Themes';

const Youtube: React.FC = () => {
  const [youtubes, setYoutube] = useState<Post[]>([]);

  useEffect(() => {
    const fetchYoutube = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=youtube');
        setYoutube(response.data);
      } catch (error) {
        console.error('Error fetching YouTube: ', error);
      }
    };

    fetchYoutube();
  }, []);

  return (
    <>
      <div className='content'>
        <h2>YouTube</h2>
        <ul>
          {youtubes.map(youtube => (
            <li key={youtube.id}>
              <h3>{youtube.title}</h3>
              <p>{youtube.body}</p>
              {youtube.image && <img src={youtube.image} alt={youtube.title} />}
              {youtube.url && <p><a href={youtube.url} target="_blank" rel="noopener noreferrer">{youtube.url}</a></p>}
              <p>Autor: {typeof youtube.author === 'string' ? youtube.author : (youtube.author as Author).name}</p>
            {youtube.themes && <Themes themes={youtube.themes} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Youtube;
