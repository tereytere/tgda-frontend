import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface';
import Themes from '../components/Themes';

const Books: React.FC = () => {
  const [books, setBooks] = useState<Post[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts?type=libro');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className='content'>
      <h2>Libros</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.body}</p>
            {book.image && <img src={book.image} alt={book.title} />}
            {book.url && <p><a href={book.url} target="_blank" rel="noopener noreferrer">{book.url}</a></p>}
            {typeof book.author === 'object' ? (
              <p>
                Autor: <Link to={`/autor/${(book.author as Author).id}`}>
                  {(book.author as Author).name}
                </Link>
              </p>
            ) : (
              <p>Autor: {book.author}</p>
            )}
            {book.themes && <Themes themes={book.themes} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
