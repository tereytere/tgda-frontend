import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        // Fetch the theme details by name "ayuda"
        const themeSearchResponse = await axios.get<Theme[]>(`http://localhost:8000/themes?name=${encodeURIComponent('ayuda')}`);
        const themeData = themeSearchResponse.data.find(t => t.name === 'ayuda');

        if (!themeData) {
          setError('Theme not found');
          setLoading(false);
          return;
        }

        setTheme(themeData);

        // Fetch the related posts and authors for the theme
        const relatedDataResponse = await axios.get<{ theme: Theme }>(`http://localhost:8000/themes/${themeData.id}`);
        const fetchedPosts = relatedDataResponse.data.theme.posts;
        const fetchedAuthors = relatedDataResponse.data.theme.authors;

        // Check if posts and authors are defined before setting the state
        if (fetchedPosts && fetchedAuthors) {
          setPosts(fetchedPosts);
          setAuthors(fetchedAuthors);
        } else {
          setError('Posts or authors data is undefined');
        }
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
    return <div>No se ha encontrado este Tema</div>; // Handle case where theme is not found
  }

  return (
    <div className='content'>
      <h2>Aporta tu granito de arena</h2>
      <h3>Posts:</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <h3>Autores:</h3>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <Link to={`/autor/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Help;
