export interface Theme {
  id: string;
  name: string;
}

export interface Author {
  id: string;
  name: string;
  image?: string;
  youtube?: string;
  instagram?: string;
  webpage?: string;
  podcast?: string;
  language?: string;
  themes?: Theme[];
}

export interface Post {
  id: string;
  title: string;
  body: string;
  type: string;
  url?: string;
  image?: string;
  author: Author;
  themes?: Theme[];
}
