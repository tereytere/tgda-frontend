import { Author } from "./author.interface";
import { Theme } from "./theme.interface";

export interface Post {
  id: string;
  title: string;
  body: string;
  type: string;
  url?: string | null;
  image?: string | null;
  author: string;
  author_id?: string | null;
  language: string;
  created_at?: Date;
  updated_at?: Date;
  authorDetails?: Author;
  themes?: Theme[];
}

