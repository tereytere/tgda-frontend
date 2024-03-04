import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '../interfaces/post.interface';

const Books: React.FC = () => {
  const [books, setBooks] = useState<Post[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<Post[]>('/posts?type=libro');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Libros</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
            {book.image && <img src={book.image} alt={book.title} />} {/* Render image if present */}
            {book.url && <p><a href={book.url} target="_blank" rel="noopener noreferrer">{book.url}</a></p>} {/* Render URL if present */}
            <p>Autor: {book.author.name}</p>
            {book.themes && (
              <div>
                <h3>Temas:</h3>
                <ul>
                  {book.themes.map(theme => (
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
  );
};

export default Books;
