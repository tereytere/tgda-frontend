import { Author } from './author.interface';
import { Post } from './post.interface';
import { Theme } from './theme.interface';

export interface SearchResults {
  authorResults: Author[];
  themeResults: Theme[];
  postResults: Post[];
}
