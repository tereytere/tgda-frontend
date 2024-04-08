import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Theme } from '../interfaces/theme.interface';
import { Post } from '../interfaces/post.interface';
import { Author } from '../interfaces/author.interface';

const Tema: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [theme, setTheme] = useState<Theme | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemeDetails = async () => {
      try {
        setLoading(true);
        // Fetch the theme details by ID
        const { data: themeData } = await axios.get<Theme>(`http://localhost:8000/themes/${id}`);
        setTheme(themeData);

        // Fetch the related posts and authors for the theme
        const { data: relatedData } = await axios.get<{ theme: Theme }>(`http://localhost:8000/themes/${id}`);

        const fetchedPosts = relatedData.theme.posts;
        const fetchedAuthors = relatedData.theme.authors;

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
  }, [id]); // Trigger the effect when the theme ID changes

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
      <h2>{theme.name}</h2>
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
    </div>
  );
};

export default Tema;
