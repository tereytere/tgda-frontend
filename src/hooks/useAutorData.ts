import { useEffect, useState } from "react";
import axios from "axios";
import { Author } from "../interfaces/author.interface";
import { Post } from "../interfaces/post.interface";
import { BASE_URL } from '../constants';


export const useAutorData = (authorId: string) => {
  const [author, setAuthor] = useState<Author | null>(null);
  const [authorPosts, setAuthorPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get<Author>(
          `${BASE_URL}/authors`,
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
          `${BASE_URL}/posts`,
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
