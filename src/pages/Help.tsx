import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Theme } from '../interfaces/theme.interface';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface';

const Help: React.FC = () => {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemeDetails = async () => {
      try {
        setLoading(true);
        // Search for the theme by name
        const themeSearchResponse = await axios.get<Theme[]>('http://localhost:8000/themes?name=ayuda');
        const themes = themeSearchResponse.data;

        const searchedTheme = themes.find(theme => theme.name === 'ayuda'); // Replace 'ayuda' with the actual theme name

        if (!searchedTheme) {
          setError('Theme not found');
          setLoading(false);
          return;
        }

        setTheme(searchedTheme);

        // Fetch the related posts and authors for the theme
        const postsResponse = await axios.get<Post[]>(`http://localhost:8000/posts?theme=${searchedTheme.id}`);
        setPosts(postsResponse.data);

        const authorsResponse = await axios.get<Author[]>(`http://localhost:8000/authors?theme=${searchedTheme.id}`);
        setAuthors(authorsResponse.data);
      } catch (error) {
        setError('Error fetching theme details');
        console.error('Error fetching theme details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchThemeDetails();
  }, []); // This effect runs once on component mount

  if (loading) {
    return <div>Cargando...</div>; // Placeholder for loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if an error occurred
  }

  if (!theme) {
    return <div>No se ha encontrado esta Página</div>; // Handle case where theme is not found
  }

  return (
    <div className='content'>
      <h2>¿Quieres ayudar?</h2>
      <h3>Posts:</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
      <h3>Autores:</h3>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            {author.name}
          </li>
        ))}
      </ul>
      <h3>Encuentra un nombre para tu mascota adoptada</h3>
    </div>
  );
};

export default Help;
