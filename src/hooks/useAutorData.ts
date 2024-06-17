import { useEffect, useState } from "react";
import axios from "axios";
import { Author } from "../interfaces/author.interface";
import { Post } from "../interfaces/post.interface";

export const useAutorData = (authorId: string) => {
  const [author, setAuthor] = useState<Author | null>(null);
  const [authorPosts, setAuthorPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get<Author>(
          `http://localhost:8000/authors`,
          {
            params: {
              authorId: authorId,
            },
          }
        );
        setAuthor(response.data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };

    const fetchAuthorPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          `http://localhost:8000/posts`,
          {
            params: {
              author_id: authorId,
            },
          }
        );
        setAuthorPosts(response.data);
      } catch (error) {
        console.error("Error fetching author posts:", error);
      }
    };

    fetchAuthor();
    fetchAuthorPosts();
  }, [authorId]);

  return { author, authorPosts };
};
