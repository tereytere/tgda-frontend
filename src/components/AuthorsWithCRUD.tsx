import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Author } from '../interfaces/author.interface';
import { Theme } from '../interfaces/theme.interface';
import { EntryActionsProps } from '../interfaces/crud.interface';
import EntryActions from '../components/EntryActions';

interface AuthorsWithCRUDProps {
  authors: Author[];
  entryActionsProps: EntryActionsProps<Author>;
  setEditAuthorName: React.Dispatch<React.SetStateAction<string>>;
  setAuthors: React.Dispatch<React.SetStateAction<Author[]>>;
  themes: Theme[]; // List of themes fetched from backend
  setThemes: React.Dispatch<React.SetStateAction<Theme[]>>;
}

const AuthorsWithCRUD: React.FC<AuthorsWithCRUDProps> = ({
  authors,
  entryActionsProps,
  setEditAuthorName,
  setAuthors,
  themes,
  setThemes,
}) => {
  const [editAuthor, setEditAuthor] = useState<Author | null>(null);
  const [editedAuthorName, setEditedAuthorName] = useState<string>('');
  const [editedAuthorAttributes, setEditedAuthorAttributes] = useState<Partial<Author>>({});

  const fetchThemes = useCallback(async () => {
    try {
      const response = await axios.get<Theme[]>('http://localhost:8000/themes');
      setThemes(response.data);
    } catch (error) {
      console.error('Error fetching themes:', error);
    }
  }, [setThemes]);

  useEffect(() => {
    // Fetch themes when component mounts
    fetchThemes();
  }, [fetchThemes]); // Include fetchThemes in the dependency array

  const handleEditClick = (author: Author) => {
    setEditAuthor(author);
    setEditedAuthorName(author.name);
    setEditedAuthorAttributes({});
    setEditAuthorName(author.name);
  };

  const handleSaveEdit = async () => {
    if (editAuthor) {
      try {
        const response = await axios.put(
          `http://localhost:8000/authors/${editAuthor.id}`,
          { ...editedAuthorAttributes, name: editedAuthorName, themes: editAuthor.themes } // Include themes in the payload
        );

        console.log('Author updated:', response.data);

        const updatedAuthor = response.data.author;

        const updatedAuthors = authors.map(item =>
          item.id === updatedAuthor.id ? updatedAuthor : item
        );
        setAuthors(updatedAuthors);

        setEditAuthor(null);
        setEditedAuthorName('');
        setEditedAuthorAttributes({});
        setEditAuthorName('');
      } catch (error) {
        console.error('Error updating author:', error);
      }
    }
  };

  return (
    <div className='authors-container'>
      {authors.map(author => (
        <div key={author.id} className='author-item'>
          {editAuthor?.id === author.id ? (
            <div>
              <input
                type="text"
                value={editedAuthorName}
                onChange={(e) => setEditedAuthorName(e.target.value)}
                placeholder="Enter edited author name"
              />
              {/* Render themes as checkboxes or dropdowns */}
              {themes.map(theme => (
                <label key={theme.id}>
                  <input
                    type="checkbox"
                    checked={author.themes?.some(t => t.id === theme.id)}
                    onChange={() =>
                      setEditedAuthorAttributes({
                        ...editedAuthorAttributes,
                        themes: author.themes?.some(t => t.id === theme.id)
                          ? author.themes.filter(t => t.id !== theme.id)
                          : [...(author.themes || []), theme],
                      })
                    }
                  />
                  {theme.name}
                </label>
              ))}
              <button onClick={handleSaveEdit}>Guardar</button>
            </div>
          ) : (
            <div>
              <span>{author.name}</span>
              {/* Display themes associated with the author */}
              {author.themes?.map(theme => (
                <span key={theme.id}>{theme.name}</span>
              ))}
              <EntryActions
                onEdit={() => handleEditClick(author)}
                onDelete={() => entryActionsProps.onDelete(author)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AuthorsWithCRUD;
