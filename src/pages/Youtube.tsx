import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface';
import Themes from '../components/Themes';
import Video from '../components/Video';

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
    <div className='content'>
      <ul className='list'>
        {youtubes.map((youtube) => (
          <li key={youtube.id} className='youtube-item'>
            <h3>{youtube.title}</h3>
            <div className='video-text-container'>
              <Video url={youtube.url} title={youtube.title} />
              <div className='content-container'>
                <p>{youtube.body}</p>
                {typeof youtube.author === 'object' && (
                  <h4>
                    <Link to={`/autor/${(youtube.author as Author).id}`}>
                      {(youtube.author as Author).name}
                    </Link>
                  </h4>
                )}
                {youtube.themes && <Themes themes={youtube.themes} />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Youtube;
