import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Post } from '../interfaces/post.interface';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:8000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching Posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post: Post) => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className='content'>
      <h2>Posts</h2>
      <ul className='list'>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} onClick={() => handlePostClick(post)}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
