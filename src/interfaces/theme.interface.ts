import { Author } from "./author.interface";
import { Post } from "./post.interface";

export interface Theme {
  id: string;
  name: string;
  created_at?: Date;
  updated_at?: Date;
  posts?: Post[];
  authors?: Author[];
}

