import { Post } from "./post.interface";
import { Theme } from "./theme.interface";

export interface Author {
  id: string;
  name: string;
  image?: string;
  youtube?: string | null;
  instagram?: string | null;
  podcast?: string | null;
  webpage?: string | null;
  language?: string | null;
  created_at?: Date;
  updated_at?: Date;
  posts?: Post[];
  themes?: Theme[];
}

