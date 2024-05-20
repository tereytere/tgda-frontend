import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Post } from "../interfaces/post.interface";
import { Author } from "../interfaces/author.interface";
import Themes from "../components/Themes";
import Video from "../components/Video";
import Podcast from "../components/Podcast";

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [themes, setThemes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setLoading(true);
        const { data: postData } = await axios.get<{ post: Post }>(
          `http://localhost:8000/posts/${id}`
        );

        const fetchedPost = postData.post;
        setPost(fetchedPost);

        if (fetchedPost.author && typeof fetchedPost.author === "object") {
          setAuthor(fetchedPost.author);
        } else {
          setAuthor(null); // Set author to null if the author data is invalid
          setError("Author data is invalid");
        }

        const fetchedThemes =
          fetchedPost.themes?.map((theme: { name: string }) => theme.name) ||
          [];
        setThemes(fetchedThemes);
      } catch (error) {
        setError("Error fetching post details");
        console.error("Error fetching post details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetails();
  }, [id]);

  useEffect(() => {}, [post, author, themes]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  const isVideo = post.type === "youtube";
  const isPodcast = post.type === "spotify";

  return (
    <div className='content'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {isVideo && <Video url={post.url} title={post.title} />}
      {isPodcast && <Podcast url={post.url} />}
      {!isVideo && !isPodcast && post.image && (
        <img src={post.image} alt={post.title} />
      )}
      {post.url && !isVideo && !isPodcast && (
        <p>
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            {post.url}
          </a>
        </p>
      )}
      {typeof post.author === "object" && (
        <h4>
          <Link to={`/autor/${(post.author as Author).id}`}>
            {(post.author as Author).name}
          </Link>
        </h4>
      )}
      {post.themes && <Themes themes={post.themes} />}
      <p>{post.language}</p>
    </div>
  );
};

export default SinglePost;
