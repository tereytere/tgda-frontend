import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Author } from '../interfaces/author.interface';

const Authors: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get<Author[]>('http://localhost:8000/authors');
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching Authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  const handleAuthorClick = (author: Author) => {
    navigate(`/autores/${author.id}`);
  };

  return (
    <div className='content'>
      <h2>Autores</h2>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <Link to={`/autores/${author.id}`} onClick={() => handleAuthorClick(author)}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
