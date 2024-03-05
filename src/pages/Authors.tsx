import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Author } from '../interfaces/post.interface';

const Authors: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get<Author[]>('http://localhost:8000/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <>
      <div className='content'>
        <h2>Autores</h2>
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <h3>{author.name}</h3>
              {author.image && <img src={author.image} alt={author.name} />} {/* Render image if present */}
              {author.youtube && <p>YouTube: <a href={author.youtube}>{author.youtube}</a></p>} {/* Render YouTube link if present */}
              {author.instagram && <p>Instagram: <a href={author.instagram}>{author.instagram}</a></p>} {/* Render Instagram link if present */}
              {author.webpage && <p>Página Web: <a href={author.webpage}>{author.webpage}</a></p>} {/* Render website link if present */}
              {author.podcast && <p>Podcast: <a href={author.podcast}>{author.podcast}</a></p>} {/* Render podcast link if present */}
              {author.language && <p>Idioma: {author.language}</p>} {/* Render language if present */}
              {author.themes && (
                <div>
                  <h4>Temas:</h4>
                  <ul>
                    {author.themes.map(theme => (
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

export default Authors;
